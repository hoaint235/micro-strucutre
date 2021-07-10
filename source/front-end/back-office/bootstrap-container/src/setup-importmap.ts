import application from "../config";

const modules = application.modules as Modules;
const dependencies = application.dependencies as Dependencies;

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement("script");
  newScript.type = "systemjs-importmap";
  newScript.text = JSON.stringify(newMapJSON);
  const allMaps = document.querySelectorAll(
    'script[type="systemjs-importmap"]'
  );

  allMaps[allMaps.length - 1].insertAdjacentElement("afterend", newScript);
}

let componentsImportMap = {};
for (let moduleName in modules) {
  let module = modules[moduleName];
  componentsImportMap[module.name] = `${module.origin}/${module.entry}`;
}
const componentEntrys = {
  imports: componentsImportMap,
};

let dependenciesImportMap = {};
for (let dependency in dependencies) {
  dependenciesImportMap[dependency] = dependencies[dependency];
}

const dependenciesLib = {
  imports: dependenciesImportMap,
};

insertNewImportMap(dependenciesLib);
insertNewImportMap(componentEntrys);
