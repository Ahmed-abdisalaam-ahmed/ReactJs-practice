import React, { useState } from "react";

const Recipe = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "dinner", "dessert"];

  const recipes = [
    {
      id: 1,
      title: "Pancakes",
      category: "breakfast",
      time: "20 min",
      difficulty: "easy",
      image: "🥞",
      ingredients: ["flour", "eggs", "milk", "butter"],
    },
    {
      id: 2,
      title: "Pasta Carbonara",
      category: "dinner",
      time: "30 min",
      difficulty: "medium",
      image: "🍝",
      ingredients: ["pasta", "eggs", "cheese", "bacon"],
    },
    {
      id: 3,
      title: "Caesar Salad",
      category: "lunch",
      time: "15 min",
      difficulty: "easy",
      image: "🥗",
      ingredients: ["lettuce", "croutons", "parmesan", "chicken"],
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "lunch",
      time: "45 min",
      difficulty: "hard",
      image: "🍰",
      ingredients: ["flour", "cocoa", "sugar", "eggs"],
    },
  ];

  const filteredRecipe =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  const getDiffcultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-500 bg-green-100";
      case "medium":
        return "text-yellow-500 bg-yellow-100";
      case "hard":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            My Recipe Collaction{" "}
          </h1>
          <p className="text-gray-600">
            find your favorite recipes and star cooking!
          </p>
        </div>

        {/* category recipe */}
        <div className=" flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={`px-4 py-2 rounded-full capitalize cursor-pointer ${
                selectedCategory === category
                  ? "bg-orange-500 text-white "
                  : " bg-white text-gray-600 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecipe.map((recipe) => (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow ">
              <div className="p-6">
                <div className="flex items-center justify-between ">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {recipe.title}
                  </h2>
                  <span className="text-4xl">{recipe.image}</span>
                </div>
                {/* recipe details */}
                <div className="flex gap-4 mb-4">
                  <span className="text-gray-500 text-sm flex  items-center">
                    ⏰{recipe.time}
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${getDiffcultyColor(
                      recipe.difficulty
                    )}`}
                  >
                    {" "}
                    {recipe.difficulty}
                  </span>
                </div>
                {/* ingrement */}
                <div>
                  <h3 className="text-sm font-meduim text-gray-700 mb-2">
                    Ingredients:{" "}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="text-gray-600 rounded-full px-2 py-1 bg-gray-100 text-sm "
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Empty State */}

        {filteredRecipe.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No Recipes Found in the category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
