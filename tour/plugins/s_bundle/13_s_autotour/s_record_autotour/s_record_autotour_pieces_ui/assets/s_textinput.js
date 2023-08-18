/*
	krpano - super simple html5 text input plugin
    modified by sergi gomez garcia www.sergigomez.com
    inputtype
    placeholder
    css
    text (value)
    onchanged

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
        plugin.registerattribute("css", "width:100%;height:100%", css_set, css_get);
        plugin.registerattribute("text", "", text_set, text_get);
        
        plugin.registerattribute("onchanged", null);
        inputelement.addEventListener("change", text_changed, true);
        inputelement.addEventListener('touchend',
            function(event) {
                inputelement.focus();
                event.preventDefault();
            }, false);
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
    function text_set(newtext) {
        inputelement.value = newtext;
    }

    function text_get() {
        return inputelement.value;
    }

    function text_changed() {
        krpano.call(plugin.onchanged, plugin);
    }



}