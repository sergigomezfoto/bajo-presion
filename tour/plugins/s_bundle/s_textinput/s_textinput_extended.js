/*
	krpano - super simple html5 text input plugin
    modified by sergi gomez garcia www.sergigomez.com
    inputtype
    placeholder
    spellcheck
    class_name
    css
    text (value)
    onchanged
    html_id

*/

var krpanoplugin = function() {
    var local = this;

    var krpano = null;
    var plugin = null;
    var inputelement = null;

    local.registerplugin = function(krpanointerface, pluginpath, pluginobject) {
        krpano = krpanointerface;
        plugin = pluginobject;

        inputelement = document.createElement("input");


        plugin.registerattribute("inputtype", "text", inputtype_set, inputtype_get);
        plugin.registerattribute("placeholder", "", placeholder_set, placeholder_get);
        plugin.registerattribute("spellcheck", "", spellcheck_set, spellcheck_get);
        plugin.registerattribute("class_name", null, class_name_set, class_name_get);
        plugin.registerattribute("autofocus", "true", autofocus_set, autofocus_get);
        plugin.registerattribute("css", "width:100%;height:100%", css_set, css_get);
        plugin.registerattribute("text", "", text_set, text_get);   
        plugin.registerattribute("onchanged", null);
        plugin.registerattribute("html_id", null ,html_id_set,html_id_get);
        //plugin.registerattribute("onloaded", console.log('event'));
       

        inputelement.addEventListener("change", text_changed, true);
    

        inputelement.addEventListener('touchend',
            function(event) {
                inputelement.focus();
                event.preventDefault();
                
            }, false); 

        inputelement.addEventListener('load', (event) => {
                console.log('The page has fully loaded');
            });

        plugin.sprite.appendChild(inputelement);

    }

    local.unloadplugin = function() {
        plugin = null;
        krpano = null;
    }
    function inputtype_set(type) {
        inputelement.type = type;
    }
    function inputtype_get() {
        return inputelement.type;
    }
    function css_set(style) {
        inputelement.style = style;
        inputelement.style.width = "100%";
        inputelement.style.height = "100%";
    }
    function css_get() {
        return inputelement.style;
    }
    function placeholder_set(ph) {
        inputelement.placeholder = ph;
    }
    function placeholder_get() {
        return inputelement.placeholder;
    }
    function spellcheck_set(sp) {
        inputelement.spellcheck = sp;
    }
    function spellcheck_get() {
        return inputelement.spellcheck;
    }
    function class_name_set(class_name) {
        if (class_name !== null && class_name.length > 0  ) {        
            inputelement.className += class_name;
        }
    }
    function class_name_get() {
        return inputelement.className;
    }
    function autofocus_set(af) {
      
        inputelement.setAttribute('autofocus', af);
 
    }
    function autofocus_get() {
        return inputelement.autofocus;
    }
    function text_set(newtext) {
        inputelement.value = newtext;
    }

    function text_get() {
        return inputelement.value;
    }

    function text_changed() {
        krpano.call(plugin.onchanged, plugin);
    }

    function html_id_get() {
        return inputelement.id 
    }
    function html_id_set(html_id) {
        if (html_id !== null && html_id.length > 0  ) {
            inputelement.id = html_id         
        }
    }

}