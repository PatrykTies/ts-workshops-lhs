type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}
