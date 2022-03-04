import React from "react";
import "./App.css";
import { createPatch } from "diff";
import { parse } from "diff2html";
import { Diff2HtmlUI } from "diff2html/lib/ui/js/diff2html-ui";
// import "highlight.js/styles/googlecode.css";
import "diff2html/bundles/css/diff2html.min.css";


let a = {
  "id": 2563
}

let b = {
  "id": 2563
}
 
let diffJsonList = [];
export default class APP extends React.Component {
  
  componentDidMount(){
    const oldString = JSON.stringify(a, null, 2);
    const newString = JSON.stringify(b, null, 2);
    const diffStr = createPatch('',oldString, newString,'','', { context: 99999 })
    const diffJson = parse(diffStr);
    console.log('diffJson--------',diffJson)
    diffJsonList.push(diffJson[0]);

    var targetElement = document.getElementById('myDiffElement');
    var configuration = {
      // drawFileList: true,
      fileListToggle: false,
      fileListStartVisible: true,
      fileContentToggle: true,
      matching: 'lines',
      outputFormat: 'side-by-side',
      highlight: true,
      renderNothingWhenEmpty: false,
    };
    var diff2htmlUi = new Diff2HtmlUI(targetElement, diffJsonList, configuration);
    diff2htmlUi.draw();
    diff2htmlUi.highlightCode();
  }

  render() {
    return (
      <>
        <div id="myDiffElement"></div>
      </>
    );
  }
}
