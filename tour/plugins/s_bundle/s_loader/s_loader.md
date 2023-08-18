____

# S_LOADERS
Those actions are designed to change adn improove the loadings

## s_imagelevel_loaded_0(action)
## s_imagelevel_loaded_1(action)
## s_imagelevel_loaded_2(action)
## s_imagelevel_loaded_3(action)
Those action look to image.loadstate (0 not charged, 1 currently loading, 2 low res, 3 high res ). When each level is reached it trigger an action.

* action: the action that it will call.

example:
```

<!-- startup action - load the first scene and call generalloader(); -->
<action name="startup" autorun="onstart">
    if(startscene === null OR !scene[get(startscene)]
        , copy(startscene,scene[0].name);  
        );
    loadscene(get(startscene), null, MERGE);
    generalloader();
    if(startactions !== null, startactions() 

        );
</action>

<!-- ACTION THAT WILL CHECK EACH IMAGE LEVEL -->
<action name="generalloader">
 
    s_imagelevel_loaded_0(trace('level 0'));
    s_imagelevel_loaded_1(trace('level 1'));
    s_imagelevel_loaded_2(trace('level 2'));
    s_imagelevel_loaded_3(trace('level 3');all_loaded(););

</action>
<!-- THE ACTION CALLED WHEN IMAGE LEVEL REACH 3 -->
<action name="all_loaded" type="javascript">
    <![CDATA[
    var loadedd = document.getElementById("loader");
    loadedd.style.opacity = '0';
    setTimeout(function(){loadedd.parentNode.removeChild(loadedd);}, 650);
    ]]>
</action>

```    
result: 
```
When the tour starts will trace 'level 0' on image.loadstate = 0, 'level 1' in image.loadstate = 1, etc... At level 3 also will call a javascript action that will make desapear a loading div defined in index.html before div pano. Visually it will be a spinner loading and when the high res image is loada the spiner desapear.

```

</br>

---

## s_load_pano(pano,obj,pre,post,svars)

## s_image_wait_render(action_to_do_when_rendered,trace_s_image_wait_rendered,trace_s_image_wait_rendered?);

detect and trigger action after fully rendered of image layer or hotspot

* actions_after_img_rendered:the action to triger after render
* trace_s_image_wait_rendered?: if true, trace.

variables created:
* s_image_wait_rendered: sumatory of numbers


Example:

    //style of autocreated image layer 
    <style name="inventory_img_thumb"
        type="image"
        align="top"
        alpha="0"
        onloaded.addevent="s_image_wait_render(calc('inventory_image_loaded(' + name + ')'));"
        parent=""
        capture="false"        
    />     
    //action after image rendered
    <action name="inventory_image_loaded" scope="local" args="ename">                          
                tween(layer[get(ename)].alpha,1);
                tween(layer[calc(ename + '_placeholder')].alpha,0);
    
    </action>

           //PLACEHOLDER style (autocreated)
                <style name="inventory_cell_placeholder"
                    type="text"
                    enabled="false"
                    align="center"
                    scalechildren="false"
                    bgroundedge="10"
                    bg="false"
                    maskchildren="false"  
                    css="font-family:computer;text-align:center;font-size:15px;color:#ffffff;"
                    html="●----"
                    alpha="0.3" 
                    onloaded="inventory_placeholder"
                />
                    //animation of flaceholder
                    <action name="inventory_placeholder" scope="local">
                        def(frequency,number,0.1);
                        delayedcall (get(frequency),
                            if (caller.html == '-----',
                                    set(caller.html,'●----');

                                ,caller.html == '●----',
                                    set(caller.html,'-●---');

                                ,caller.html == '-●---',
                                    set(caller.html,'--●--');

                                ,caller.html == '--●--',
                                    set(caller.html,'---●-');
                                ,caller.html == '---●-',
                                    set(caller.html,'----●');

                                ,caller.html == '----●',
                                    set(caller.html,'●----');         
                            );
                            callwith(layer[get(caller.name)],onloaded);                       
                        );
                    </action>


result: 

    after fully rendered of the image, will trigger the final action (placeholder alpha0 and image alpha1)

   