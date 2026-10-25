export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myString = "This is my string that was told to make";
  let myNumber = 1013;
  let isMyString = typeof myString;
  let isMyNumber = typeof myNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      myString = {myString}                       <br />
      myNumber = {myNumber}                       <br />
      isMyString = {isMyString}                   <br />
      isMyNumber = {isMyNumber}                   <br />
      sampleCount = {sampleCount}                 <br />
      sampleLabel = {sampleLabel}                 <br />
      isSampleCount = {isSampleCount}             <br />
      isSampleLabel = {isSampleLabel}             <br />

      <hr />
    </div>
  );
}