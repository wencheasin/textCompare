"use strict";

(function() {

    // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE
    /**
     * Add a function that will be called when the window is loaded.
     */
    window.addEventListener("load", init);
    /**
     * CHANGE: Describe what your init function does here.
     */
    function init() {
    cull();
    }

    /**
     * Make sure to always add a descriptive comment above
     * every function detailing what it's purpose is
     * Use JSDoc format with @param and @return.
     */
    function cull() {
        const aTags = document.querySelectorAll('a');
        const values = Array.from(aTags).map(tag => tag.textContent);
        document.body.innerHTML = '';
        values.forEach(value => {
            const project = document.createElement("project");
            project.textContent = value;
            document.body.appendChild(project);
            })
        const updatedHTML = documetn.documentElement.outerHTML;
        const blob = new Blob([updatedHTML],{type: text/html});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "permitTagHTML";
        a.click();
    }
    /**
     * Make sure to always add a descriptive comment above
     * every function detailing what it's purpose is
     * @param {variabletype} someVariable This is a description of someVariable, including, perhaps, preconditions.
     * @returns {returntype} A description of what this function is actually returning
     */
    function exampleFunction2(someVariable) {
    /* SOME CODE */
    return something;
    }
})();