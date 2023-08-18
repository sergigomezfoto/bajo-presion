____
____

# S_SETTERS
Those actions build things to set visually variables layer properties,etc..


## s_slider_setter(elementtochanche,atributetochange,lowervalue,higgervalue,texttoshowintag,barwidth,xpos,ypos,parentname,align,edge); 

Construct a visual slider that change the value of an element or setting atribute. it can be 0 to whatever or a minus value but then must be symetric, ex: -10 to 10.


* elementtochanche: the name of the element (can be layer hotspot krpano parameter or numerical variable)
* atributetochange: the atribute to change refered to the element name (if variable, set to 'global')
* lowervalue: the lower value it can be. if not setted 0 (suport 0xhex)
* higgervalue: the higger value. Must be setted. (suport 0xhex)
	 
//optional//
* texttoshowintag: This fields controls 4 texts. 'main tag' 'min value' 'max value' and 'current value' and can be setted with several convinations
    * empty: a preconfigured main tag and min, max, and current value.
    * with the word: 'off': there will not be any text. only the slider with the thumb
    * only one text: only the main tag without min,max or current.
    * text separated by '|': [custom text for the main tag, or 'off' or empty (preconfigured text)] | ['on' or 'off'] | ['on' or 'off'] | ['on' or 'off']. on or off set or not set the min,max and current.

* xpos: the x position of the bar.if not setted the preconfigurable 's_slider_line'
* ypos: the y position of the bar.if not setted the preconfigurable 's_slider_line'
* barwidth: the bar width. if not setted the preconfigurable 's_slider_line'
* parentname: the parent of the setter element. if not setted, no parent or the preconfigurable 's_slider_line'
* align: the align for the system of layers (slider, text, etc...) if not setted, the preconfigurable 's_slider_line'
* edge: the edge for the system of layers (slider, text, etc...) if not setted, the preconfigurable 's_slider_line'



config
```
The preconfigured styles in styles/styles.xml
```

Example:
```
<action autorun="onstart">	
	//1	
    s_slider_setter(sdummy1,scale,0,3,,10,0,400,sdummy1);	
	//2
	s_slider_setter(view,hlookat,-60,60,off,10,-120);	
	//3
	s_slider_setter(hes1,scale,0,2,modify hs scale:|on|on|on,10,-60);	
	//4
	s_slider_setter(hes1,width,0,300);	
	
    //5
set(papapa,10);

	s_slider_setter(global,papapa,-120,120,off|off|off|on,0,60);	
    
		s_callwhen(papid,papapa GT 40, trace('papa superior a 40');,true );
	//6
	s_slider_setter(hes1,bgcolor,0x000000,0xffffff,,0,-180,calc(stagewidth ),,left,left);	
</action>

```
result:
```
1.- slider to change the layer[sdummy1].scale from 0 to 3, the text will be the preconfigured main tag, min,max,current,  have an x y offset of 10 and 0, and the bar width will be of 400 px. The slider will have sdummy1 layer as parent
2.- slider to change the view.lookat and the min max values will be -60 and 60, it will be no text, and will have an x y offset of 10 and -120.  Default width and no parents 
3.- slider to change the hotspot[hes1].scale, in a range of 0 to 2 main tag text will be ',modify hs scale:' and will have min,max, and current. the x y offset will be 10 and -60
4.- slider to change the hotspot[hes1].width with a range of 0 to 300, with preconfigured texts and without offsets. The default width of the bar and no parents (so the screen).
5.- slider to modify the variable 'papapa' setted to 10 earlier. the range is -120 to 120 and will have no text except the current value. the offset will be x 0 and y 60. default width and no parents 
6.- slider to change the hotspot[hes1].bgcolor with a range of 0x000000 to 0xffffff, with preconfigured texts and without  xoffset and -180 of yoffser. The width of the bar will be the same as the screen, no parents (so the screen), and custom align to left and edge to left.

```

</br>


## s_boolean_setter(elementtochanche,atributetochange,tagtexts,xpos,ypos,barwidth,parentname,salign,sedge); 

Construct a visual boolean choser that change the value of an element or setting atribute. 


* elementtochanche: the name of the element (can be layer hotspot krpano parameter or numerical variable)
* atributetochange: the atribute to change refered to the element name (if variable, set to 'global')
* texttoshowintag: This fields controls 4 texts. 'main tag' 'min value' 'max value' and 'current value' and can be setted with several convinations
    * empty: a preconfigured main tag and min, max, and current value.
    * with the word: 'off': there will not be any text. only the slider with the thumb
    * only one text: only the main tag without min,max or current.

* xpos: the x position of the bar.if not setted the preconfigurable 's_boolean_line'
* ypos: the y position of the bar.if not setted the preconfigurable 's_boolean_line'
* barwidth: the bar width. if not setted the preconfigurable 's_boolean_line'
* parentname: the parent of the setter element. if not setted, no parent or the preconfigurable 's_boolean_line'
* align: the align for the system of layers (slider, text, etc...) if not setted, the preconfigurable 's_boolean_line'
* edge: the edge for the system of layers (slider, text, etc...) if not setted, the preconfigurable 's_boolean_line'



config
```
The preconfigured styles in styles/styles.xml
```

Example:
```
<action autorun="onstart">	
	//1
	s_boolean_setter(hes1,visible,visibilitat del hotspot: ,-10,-60,,left,right);
	//2
	delayedcall(0.0,
		s_boolean_setter(s_reducer_log,visible,off,10,60);
	);
	//3
	s_boolean_setter(global,fullscreen,,10,0);

</action>

```
result:
```
1.- boolean setter to toggle hotspot[hes1].visible, with the text 'visibilitat del hotspot:' xoffset -10 and yoffset -60. no parent and custom alignment to left and edge to right
2.- boolean setter to toggle layer[s_reducer_log].visible, with no text and xoffset 10 and y offset 60.
3.- boolean setter to toggle  the var fullscreen (global as first paramenter!), with the preconfigured text, and xoffset of 10.


```

</br>