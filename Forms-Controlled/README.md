# **Section 6: Forms and Controlled Components**

---

### **Overview**

**Section Objectives:**

- Understand the difference between controlled and uncontrolled components in React.
- Learn how to manage form inputs using state.
- Implement form validation techniques.
- Explore handling multiple form fields efficiently.
- Introduce third-party form libraries like React Hook Form.
- Apply these concepts in practical applications.

**Lessons in this Section:**

1. **Lesson 5.1:** Introduction to Controlled and Uncontrolled Components
2. **Lesson 5.2:** Managing Form State with Controlled Components
3. **Lesson 5.3:** Handling Multiple Inputs and Form Validation
4. **Lesson 5.4:** Using React Hook Form for Efficient Form Handling
5. **Lesson 5.5:** Practical Application: Building a Registration Form
6. **Lesson 5.6:** Enhancing the Todo App with Complex Forms

---

### **Lesson 5.1: Introduction to Controlled and Uncontrolled Components**

**Lesson Objectives:**

- Understand the concepts of controlled and uncontrolled components.
- Learn the differences between the two approaches.
- Recognize when to use controlled or uncontrolled components.

**Lesson Content:**

### **1. What are Controlled Components?**

- **Definition:**
    - A controlled component is a component where React controls the form data.
    - The form data is handled by the component's state, making React the single source of truth.
- **Example:**
    
    ```jsx
    const ControlledInput = () => {
      const [value, setValue] = useState('');
    
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    
    ```
    
- **Characteristics:**
    - The `value` of the input is set by the component's state.
    - Changes to the input update the state via `onChange`.

### **2. What are Uncontrolled Components?**

- **Definition:**
    - An uncontrolled component is a component where the form data is handled by the DOM itself.
    - React does not control the form data; instead, refs are used to access the values.
- **Example:**
    
    ```jsx
    const UncontrolledInput = () => {
      const inputRef = useRef(null);
    
      const handleSubmit = () => {
        alert(`Input Value: ${inputRef.current.value}`);
      };
    
      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    };
    
    ```
    
- **Characteristics:**
    - The `value` of the input is managed by the DOM.
    - `useRef` is used to access the current value when needed.

### **3. Differences Between Controlled and Uncontrolled Components**

| Aspect | Controlled Components | Uncontrolled Components |
| --- | --- | --- |
| Data Handling | Managed by React state | Managed by the DOM |
| Accessing Values | Via state variables | Via refs (`useRef`) |
| Validation | Can be validated during `onChange` or before submission | Typically validated after accessing the value via ref |
| Simplicity | Requires more code to set up state and handlers | Simpler to set up, less code initially |
| Use Cases | Preferred when the form data needs to be managed and validated | Useful for simple forms or integrating with non-React code |

### **4. When to Use Which Approach**

- **Controlled Components:**
    - When you need to validate input as the user types.
    - When you need to conditionally enable/disable inputs based on other inputs.
    - When the form data needs to be submitted or manipulated by React.
- **Uncontrolled Components:**
    - When you don't need to interact with the form data until submission.
    - For simple forms or when integrating with third-party libraries that manipulate the DOM.

### **5. Best Practices**

- **Consistency:**
    - Stick to one approach within a form to avoid confusion.
    - Controlled components are generally preferred in React applications.
- **Performance Considerations:**
    - Uncontrolled components can be slightly more performant for very large forms.
    - Controlled components provide better control and are easier to debug.

### **Practical Exercise**

- **Task:**
    - Create two simple forms, one using a controlled component and one using an uncontrolled component.
    - Practice handling form submissions and accessing input values.

---

### **Lesson 5.2: Managing Form State with Controlled Components**

**Lesson Objectives:**

- Learn how to manage form inputs using state.
- Understand how to handle `onChange` events.
- Practice updating state based on user input.

**Lesson Content:**

### **1. Handling Single Input Fields**

- **Setting Up State:**
    
    ```jsx
    const [inputValue, setInputValue] = useState('');
    
    ```
    
- **Updating State on Input Change:**
    
    ```jsx
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
    
    ```
    
- **Rendering the Input:**
    
    ```jsx
    <input type="text" value={inputValue} onChange={handleChange} />
    
    ```
    

### **2. Handling Form Submission**

- **Preventing Default Behavior:**
    
    ```jsx
    const handleSubmit = (e) => {
      e.preventDefault();
      // Process form data
    };
    
    ```
    
- **Form Component:**
    
    ```jsx
    const SimpleForm = () => {
      const [inputValue, setInputValue] = useState('');
    
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${inputValue}`);
        setInputValue('');
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    ```
    

### **3. Handling Multiple Inputs**

- **State as an Object:**
    
    ```jsx
    const [formData, setFormData] = useState({
      username: '',
      email: '',
    });
    
    ```
    
- **Updating State Dynamically:**
    
    ```jsx
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    ```
    
- **Rendering Multiple Inputs:**
    
    ```jsx
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
    
    ```
    

### **4. Handling Different Input Types**

- **Checkboxes:**
    
    ```jsx
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };
    
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
    ```
    

**Select Dropdowns:**

```jsx
const [selectedOption, setSelectedOption] = useState('');

<select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>

```

### **5. Best Practices**

- **Keep State Close to Where It's Used:**
    - Place state variables in the component where they are needed.
- **Avoid Unnecessary Re-renders:**
    - Optimize performance by structuring state efficiently.

### **Practical Exercise**

- **Task:**
    - Create a form with multiple inputs (e.g., username, email, password, checkbox, select Dropdown).
    - Manage the form data using state.
    - Handle form submission and display the entered data.

---

### **Lesson 5.3: Handling Multiple Inputs and Form Validation**

**Lesson Objectives:**

- Learn techniques for handling multiple form inputs efficiently.
- Implement basic form validation.
- Provide user feedback for invalid inputs.

**Lesson Content:**

### **1. Efficiently Handling Multiple Inputs**

- **Dynamic State Update Function:**
    
    ```jsx
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
    
    ```
    
- **Naming Inputs Appropriately:**
    - Ensure the `name` attribute matches the key in the state object.

### **2. Basic Form Validation**

- **Client-Side Validation:**
    - Check input values before form submission.
    - Validate required fields, email formats, password strength, etc.
- **Example Validation Function:**
    
    ```jsx
    const validateForm = () => {
      const errors = {};
      if (!formData.username.trim()) {
        errors.username = 'Username is required';
      }
      if (!formData.email.includes('@')) {
        errors.email = 'Email is invalid';
      }
      return errors;
    };
    
    ```
    
- **Displaying Validation Errors:**
    
    ```jsx
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        // Submit form
      } else {
        setErrors(validationErrors);
      }
    };
    
    ```
    
- **Showing Error Messages:**
    
    ```jsx
    {errors.username && <p className="error">{errors.username}</p>}
    
    ```
    

### **3. Real-Time Validation**

- **Validating on Input Change:**
    - Provide immediate feedback as the user types.
- **Example:**
    
    ```jsx
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    
      // Validate the specific field
      if (name === 'email' && !value.includes('@')) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is invalid' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    };
    
    ```
    

### **4. Form Submission**

- **Handling Submission Only if Valid:**
    
    ```jsx
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        // Proceed with form submission
      } else {
        setErrors(validationErrors);
      }
    };
    
    ```
    

### **5. Best Practices**

- **User-Friendly Feedback:**
    - Clearly indicate which fields have errors.
    - Provide helpful error messages.
- **Accessibility Considerations:**
    - Use appropriate HTML elements and ARIA attributes.
    - Ensure that forms are navigable via keyboard.

### **Practical Exercise |** Developer Application Form Challenge

## Objective

Create a professional job application form with real-time validation and modern UI using React and Tailwind CSS.

## Requirements

### Form Fields

1. **Full Name**
    - Letters only (2-30 characters)
    - No special characters except spaces
    - Required field
2. **Email**
    - Must be a valid email format
    - Required field
    - Real-time validation as user types
3. **Role Selection**
    - Dropdown menu with predefined roles
    - Required field
    - Options include:
        - Frontend Developer
        - Backend Developer
        - Full Stack Developer
        - UI/UX Designer
        - Product Manager
4. **Years of Experience**
    - Number input
    - Range: 0-50 years
    - Required field
    - Must be a valid number
5. **Skills**
    - Multiple checkbox selection
    - At least one skill must be selected
    - Options include:
        - React
        - JavaScript
        - TypeScript
        - Node.js
        - Python
        - Java
        - UI Design
        - API Development
6. **Terms & Conditions**
    - Checkbox
    - Must be checked to submit
    - Required field
7. **Notifications**
    - Optional checkbox
    - For receiving updates

### Validation Requirements

1. Implement real-time validation
2. Show error messages immediately after user input
3. Validate all fields before form submission
4. Prevent form submission if there are any errors

### UI/UX Requirements

1. Use Tailwind CSS for styling
2. Responsive design
3. Clear error messages in red
4. Visual feedback for form states:
    - Normal state
    - Error state
    - Focus state
    - Success state

### Code Structure

1. Use functional components
2. Implement proper state management
3. Separate validation logic
4. Handle form submission
5. Use proper event handling

## Bonus Challenges

1. Add form data persistence using localStorage
2. Implement a success message modal
3. Add loading state to submit button
4. Add field icons
5. Implement form reset functionality

## Example Usage

```jsx
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notifications: false
  });

  const [errors, setErrors] = useState({});

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager"
  ];

  const skillOptions = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "Python", "Java", "UI Design", "API Development"
  ];

  const validateField = (name, value) => {
    let error = "";
    
    if (name === 'fullName') {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }
    
    if (name === 'email') {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    
    if (name === 'role') {
      if (!value) {
        error = "Please select a role";
      }
    }
    
    if (name === 'experience') {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }
    
    if (name === 'skills') {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }
    
    if (name === 'agreeToTerms') {
      if (!value) {
        error = "You must agree to the terms";
      }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Show validation immediately when user types/changes value
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));

    // Validate skills immediately
    const error = validateField('skills', newSkills);
    setErrors(prev => ({
      ...prev,
      skills: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Handle successful submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          Developer Application Form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.fullName
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.email
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Role Select */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.role
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            >
              <option value="">Select a role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role}</p>
            )}
          </div>

          {/* Experience Input */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className={`mt-1 block w-full rounded-lg border ${
                errors.experience
                  ? 'border-red-300 ring-red-500'
                  : 'border-zinc-300 ring-blue-500'
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.experience && (
              <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          {/* Skills Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map(skill => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-zinc-600">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
          )}

          {/* Notifications Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-700">
              Receive notifications about new opportunities
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

```

## Testing Scenarios

1. Submit form without filling any fields
2. Enter invalid email format
3. Try submitting without selecting skills
4. Enter invalid characters in name field
5. Submit form with all valid data

![Screenshot 2025-02-13 at 4.24.48 AM.png](attachment:c0dd57c6-2c42-414a-ba73-76cd87c8942c:Screenshot_2025-02-13_at_4.24.48_AM.png)

---

### **Lesson 5.4: Using React Hook Form for Efficient Form Handling**

**Lesson Objectives:**

- Introduce React Hook Form library.
- Learn how to manage forms efficiently with less code.
- Implement validation using React Hook Form.

**Lesson Content:**

### **1. What is React Hook Form?**

- **Definition:**
    - A library that simplifies form management in React.
    - Leverages uncontrolled components and refs for better performance.
    - Reduces the amount of code needed for form handling.

### **2. Setting Up React Hook Form**

- **Installation:**
    
    ```bash
    npm install react-hook-form
    
    ```
    
- **Basic Usage:**
    
    ```jsx
    import { useForm } from 'react-hook-form';
    
    const MyForm = () => {
      const { register, handleSubmit } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('username')} />
          <input {...register('email')} />
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    ```
    

### **3. Handling Validation**

- **Using Validation Rules:**
    
    ```jsx
    <input
      {...register('username', { required: 'Username is required' })}
      />
    
    ```
    

**Accessing Errors:**

```jsx

const { register, handleSubmit, formState: { errors } } = useForm();

{errors.username && <p>{errors.username.message}</p>}

```

### **4. Managing Form State**

- **Default Values:**
    
    ```jsx
    const { register, handleSubmit } = useForm({
      defaultValues: {
        username: '',
        email: '',
      },
    });
    
    ```
    
- **Controlled Components:**
    - While React Hook Form uses uncontrolled components, you can still control inputs if needed.

### **5. Submitting the Form**

- **Handling Submission:**
    
    ```jsx
    const onSubmit = (data) => {
      // data contains the form values
    };
    
    ```
    

### **6. Benefits of React Hook Form**

- **Less Boilerplate:**
    - Reduces the amount of code needed for forms.
- **Better Performance:**
    - Minimizes re-renders by using uncontrolled components.
- **Built-in Validation:**
    - Simplifies validation with built-in rules.

---

### **Lesson 5.5: Practical Application: Building a Registration Form**

**Lesson Objectives:**

- Apply form handling techniques to build a functional registration form.
- Practice validation and user feedback.
- Manage form state efficiently.

**Lesson Content:**

### **1. Planning the Form**

- **Fields to Include:**
    - Username
    - Email
    - Password
    - Confirm Password
    - Accept Terms Checkbox

### **2. Implementing the Form**

- **Using React Hook Form:**
    - Utilize `useForm` for simpler form management.

### **3. Adding Validation**

- **Validation Rules:**
    - All fields are required.
    - Email must be in a valid format.
    - Password must meet complexity requirements.
    - Confirm Password must match Password.
    - Terms must be accepted.
- **Displaying Errors:**
    - Show error messages next to the respective inputs.

### **4. Handling Submission**

- **On Successful Validation:**
    - Simulate form submission (e.g., display a success message or log data).
- **On Validation Errors:**
    - Prevent submission and display errors.

### **5. Enhancing User Experience**

- **Real-Time Validation:**
    - Provide immediate feedback as the user types.
- **Styling the Form:**
    - Use CSS or Tailwind CSS to make the form visually appealing.

### **Sample Code:**

```jsx
// RegistrationForm.jsx
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('Registration Data:', data);
    // Simulate registration process
  };

  const password = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>
      <div>
        <label>
          Username:
          <input
            {...register('username', { required: 'Username is required' })}
          />
        </label>
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
        </label>
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="error">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
        </label>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            {...register('terms', { required: 'You must accept the terms' })}
          />
          I accept the terms and conditions
        </label>
        {errors.terms && <p className="error">{errors.terms.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

```

---

### **Practical Exercise for Lesson 5.5**

### **Exercise Title:** Student Registration Form Challenge - Instructions for Students

---

## Your Task

Create a student registration form that collects essential student information with proper validation.

### What You'll Build

A form that collects:

1. Student Name
2. Email Address
3. Grade Level (9-12)
4. Subject Interests

### Requirements

### 1. Form Fields

- **Student Name**
    - Must be at least 2 characters
    - Cannot be empty
    - Only letters and spaces allowed
- **Email**
    - Must be a valid email format ([example@domain.com](mailto:example@domain.com))
    - Cannot be empty
- **Grade Level**
    - Must select one grade from dropdown
    - Options: Grade 9, 10, 11, 12
    - Cannot be empty
- **Subject Interests**
    - Must select at least one subject
    - Options: Mathematics, Science, English
    - Checkbox style selection

### 2. Validation Requirements

- Show error messages in red
- Validate in real-time as user types
- Check all fields before submission

### 3. Form Submission

- Log form data to console when submitted
- Show success alert with form data
- Only submit if all validations pass

![Screenshot 2025-02-13 at 5.28.27 AM.png](attachment:252a24a1-9894-46fd-ae97-cf6adac4586c:Screenshot_2025-02-13_at_5.28.27_AM.png)

### Bonus Challenges

1. Add form reset button
2. Add loading state to submit button
3. Save form data to localStorage
4. Add custom styling to error states

Need help? Check the solution code provided above for reference!