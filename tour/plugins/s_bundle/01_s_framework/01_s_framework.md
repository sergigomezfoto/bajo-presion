____
____

# S_FRAMEWORK
Those actions are general action and are ment to be a helping hand during the coding process.


## s_log(var,var,...); 

It show the name of the variable and the value of the variable in the same line. Yo can log some variables in one s_log() action.

Example:

    <action name="accio_slog" autorun="onstart" >
        set(hola,32);
        set(adeu,42); 
        s_log(hola,adeu);	
    </action>

result:

    INFO: [ hola ]: 32
    INFO: [ adeu ]: 42

###### `Not suported inside LOCAL OR PRIVATE actions`
</br>

_______

## s_random(bottomval,topval,destvar); 

It throw a random and rounded value between two numbers:

* bottomval: the bottom value of the range of numbers (itself included)

* topval: the top value of the range of numbers (itself included)

* destvar: the destination global variable that will contain that number (if don't exist it will be created on the fly )

Example:

    <action name="accio_random_num" autorun="onstart" >
        s_random(-10,20,destvar);
        trace(destvar);
    </action>    
result:

    INFO: -2

    'destvar' will contain a random rounded number between -10 and 20.


</br>

_____

## s_number_array_analisis(nº|nº|...,number,token)
It analizes and compares a given number with an array of numbers. It use a token (string) to generate the global variables that contains all the information of the analisis.
* nº|nº|... : array of numbers separated by "|" that will be the base of comparation
* number: the single number in with will be compared the array of numbers.
* token: will utilize this word to create the diferent global variables containing all the analisis.

variables created:
+ s_token_given -> the number you give
+ s_token_bigger -> array of bigger numbers
+ s_token_lower -> array of lower numbers
+ s_token_coincident -> array of coincident numbers

Example:

    <action name="accio_analisi_numeros"  autorun="onstart" >

        s_number_array_analisis('1|23|-23|-26|53|24|0|44|44|1|8|-2|15|10|-13|13',13,hodei);

        //	CALCULATIONS:
        //1. the given number
            trace('1. given number:: ',calc(s_hodei_given));
        //2. the number of higher numbers
                trace('2. number of higher numbers:: ',calc(s_hodei_bigger.count));
        //3. the number of lower numbers
                trace('3. number of lower numbers:: ',calc(s_hodei_lower.count));
        //4. the number of coincidences
                trace('4. number of coincidences:: ',calc(s_hodei_coincident.count));
        //5. the nearest bigger number 
                s_hodei_bigger.sortby(value,numeric|ascending);
                trace('5. nearest bigger number:: ',calc(s_hodei_bigger[0].value));
        //6. the nearest lower number
                s_hodei_lower.sortby(value,numeric|descending);
                trace('6. nearest lower number:: ',calc(s_hodei_lower[0].value));
        //7. the coincident number
                trace('7. coincident number:: ',calc(s_hodei_coincident[0].value));
        //8. the total nearest number (excluding the coincidents)
            mod(modulpetit,s_hodei_given,s_hodei_lower[0].value);
            mod(modulgran,s_hodei_bigger[0].value,s_hodei_given);
                trace('8. total nearest number (excluding the coincidents):: ',
                    calc(
                        modulpetit == modulgran ? 
                        s_hodei_lower[0].value + ' and ' + s_hodei_bigger[0].value :
                            (
                                modulpetit LT modulgran ? 
                                s_hodei_lower[0].value : 
                                s_hodei_bigger[0].value
                                )
                    )
                );  	
        trace('--------------------------------');

        //9. the array of lower numbers	
                for(set(k,0), k LT s_hodei_lower.count , inc(k),
                        trace('LOWER: ',s_hodei_lower[get(k)].value);
                    );
        //10. the array of higher numbers
                for(set(k,0), k LT s_hodei_bigger.count , inc(k),
                        trace('HIGHER: ',s_hodei_bigger[get(k)].value);
                    );
        //11. the array of coincidet numbers	
                for(set(k,0), k LT s_hodei_coincident.count , inc(k),
                        trace('COINCIDENTS: ',s_hodei_coincident[get(k)].value);
                    ); 
    </action>

result:

    INFO: 1. given number:: 13
    INFO: 2. number of higher numbers:: 6
    INFO: 3. number of lower numbers:: 9
    INFO: 4. number of coincidences:: 1
    INFO: 5. nearest bigger number:: 15
    INFO: 6. nearest lower number:: 10
    INFO: 7. coincident number:: 13
    INFO: 8. total nearest number (excluding the coincidents):: 15
    INFO: ------------------------------
    INFO: LOWER: 10 
    INFO: LOWER: 8
    INFO: LOWER: 1
    INFO: LOWER: 1
    INFO: LOWER: 0
    INFO: LOWER: -2
    INFO: LOWER: -13
    INFO: LOWER: -23
    INFO: LOWER: -26
    INFO: HIGHER: 15
    INFO: HIGHER: 23
    INFO: HIGHER: 24
    INFO: HIGHER: 44
    INFO: HIGHER: 44
    INFO: HIGHER: 53
    INFO: COINCIDENTS: 13

</br>

_______

## s_uniqueid(); 

It calculate a unique id. usefull to create diferent layers or hotspots dinamically 

variables created:
* s_uniqueid_var: contains the current timestamp

Example:

    <action name="accio_timestamp" autorun="onstart" >
        s_uniqueid(); 
            assyncloop(!s_uniqueid_var,,  
                s_log(s_uniqueid_var);
                addlayer(calc('layer' + s_uniqueid_var));
            );  
    </action>    
result:

     INFO: [ s_uniqueid_var ]: qkhuh5ltgqs

    and will create a layer named: layerqkhuh5ltgqs

</br>

_______

## s_set(var|var|var,uniquevalue or value|value|value); 

Multiple var set. Iw works as multiple variables changed to a single value or multiple variables changes to multiple values (but then it must be the same number of values and vars).

variables created:
* var|var|var:the multiple variables to change separated by '|'
* uniquevalue: if there is only unique value all will change to unique value
    or
* value|value|value: if there are some values, each var will change to its respective value.

Example2:

    <action autorun="onstart">

          s_set(
            layer[counter].alpha |
            layer[title_counter].alpha|
            layer[points].alpha|
            layer[bottom-left].alpha|
            layer[bottom-right].alpha
          ,
             
          );  

        </action>
result:

    the layers 'counter', 'title_counter', 'points', 'bottom-left', 'bottom-right' will change threir alpha property to 0.


Example:

    <action autorun="onstart">

          s_set(
            layer[counter].alpha |
            layer[title_counter].alpha|
            layer[points].alpha|
            layer[bottom-left].alpha|
            layer[bottom-right].alpha
          ,
            0.1|0.3|0.8|0.5|0.3
          );  

        </action>
result:

    alpha result: 'counter':0.1, 'title_counter':0.3, 'points':0.8, 'bottom-left':0.5, 'bottom-right':0.3 

</br>

_______

## s_callwhen(id,condition,actions,once,frequency); 

callwhen action that don't die when action is reached, but it can be paused, resumed and killed manualy

* id: the id of the callwhen (used to kill the interval)
* condition: when the condition is true, will execute the actions
* actions: actions to execute when the condition is true in bucle by default!
* once:if true the action will run once but every time when the condition is true, if the created variable is not setted to clear. Don't use 'pause externaly if once is setted to true!!
* frequency: frequency of the interval, if empty 0.005 by default

variables created:
* s_callwhen[id] : 'pause'->pause the listening to condition (DON'T USE IF ONCE IS ENABLED) 'run'-> resume the listening 'clear'-> kill the interval forever

Example:

    <action autorun="onstart">

          change_colors();
          trace_thing();
    </action>

    <action name="change_colors">

        <!-- redlinebottom|counterbg
        41527a blau
        eb5000 tronja
        ff1720 vermell	 -->

        s_callwhen(c1,s_countermaincounter LT 13,
        set(layer[redlinebottom].bgcolor,0x41527a); 
        set(layer[counter].crop,get(layer[counter].cropblau));

        );

        s_callwhen(c2,s_countermaincounter GE 13 AND s_countermaincounter LT 24,
        set(layer[redlinebottom].bgcolor,0xeb5000); 
        set(layer[counter].crop,get(layer[counter].croptronja));

        );

        s_callwhen(c3,s_countermaincounter GE 24,
        set(layer[redlinebottom].bgcolor,0xff1720); 
        set(layer[counter].crop,get(layer[counter].cropvermell));
        set(s_callwhenc1,'pause');
        set(s_callwhenc2,'pause');
        set(s_callwhenc3,'pause');

        );

    </action>
    
    <action name="trace_thing">
        s_callwhen(papid,papapa GT 40, trace('papa superior a 40');,true );	
    </action>
result:

    change_colors: when the var 's_countermaincounter' is LT 13 will set the color of 'redlinebottom' and 'counter' layers to blue, when GE than 13 and LT 24, to orange, and when is GE than 24, will pause the listening to the callwhens, unrill the var 's_callwhenc1' is setted to 'run' (will run again) or 'clear' (will kill forever the interval)
    trace_thing: every time that papapa variable is gretter than 40 will trace 'papa superior a 40' but only one time, so it won't be an infinite bucle of trace.

_______

## s_capture_html_element(capture,set_html_id,log_captured); 

A javascript action that capture the html element. can console.log the element itself, and give it an HTML ID that can be manipulated by javascript as ususal getElementById....

* capture: can't be empty!!!!
    * c: the elelent with their properties
    * s: the sprite <div...> that you can access via Javascript
    

* set_html_id: if not empty will give to the element the corresponding html id
* log_captured: want to console.log the element? default: true


variables created:
* the html id: will be: kp_s_[set_html_id]


Example:

    //action to put html id to all layers: 
    // <action name="" autorun="preinit">
    //
    // for(set(i, 0), i LT layer.count, inc(i),
    // layer[get(i)].addevent(onloaded, s_capture_html_element(s,get(name),true));	
    // );	
    //
    // </action>
    //

    // A style of a plugin with the action inserted in onloaded, and next to it a javascript action to access to his firstchild (whitch is the important element: the input). The action will call for the sprite (s) -> <div...> will have the html id=kp_s_s_input_field (s_input_field is the name of the layer), and will not console.log the element. the next action, autofocus_action(); will set an autofocus just when the plugin will be loaded.

     <style name="input_field_create_arrow" 
        url="%FIRSTXML%/s_files/creator/s_bundle/s_textinput/s_textinput_extended.js" 
        align="lefttop"
        edge="center"
        width="100"
        height="20"
        text="" 
        placeholder="número escena"
        inputtype="number"
        onloaded="s_capture_html_element(s,get(name),false); autofocus_action(); "		
    />

    //action to set the autofocus:
    <action name="autofocus_action" type="javascript">
    <![CDATA[
    
        var mainelement = document.getElementById('kp_s_s_input_field');     
        var inputelement = mainelement.childNodes[0];
        //console.log(inputelement);
        inputelement.focus();

    ]]>
    </action>
    
result: 

    The plugin input (layer[s_input_field]) will get a focus on it (so the cursor will stay in it) just when the plugin will be loaded.

   
_______

## s_addlayer / s_addhotspot(name,keep); 
create a layer linked with a style witch have to have the same exact name

* name:name of the element
* keep:keep of the element. default layers=true, hotspots=false


Example:

    //the action that create a layer
    <action name="elquesigui">

    s_addlayer(view_restricted_advisor);
    set(layer[view_restricted_advisor]
        ,
        keep="true"
        ,
        css="color:white;"
        ,
    );

    </action>

    //the style with the same name of the layer
    <style name="view_restricted_advisor"
        type="text"
        parent="STAGE"
        zorder="2000000000000000000000"
        bg="false"
        html="view restringida"	
        align="bottomright"
        css="color:white"
    />


result: 

  A layer 'restct_view_addvisor' will be created and linked to the styles with the same name. after this action you could set new attributes but there is no variable linked to the layer, so use layer[name] or hotspot[name] in the set action.
_______



