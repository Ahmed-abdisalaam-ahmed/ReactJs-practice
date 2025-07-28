import Greeting from "./Greeting";
function App() {
  return (
    <>
      <Greeting 
        Currentname={"shiabudiin"}
        Role={"superAdmin"}
      />

      <Greeting 
        Currentname={"yuusuf"}
        Role={"User"}
      />

      <Greeting 
        Currentname={"abdi"}
        Role={"customer"}
      />
    </>
  );
}
export default App;
