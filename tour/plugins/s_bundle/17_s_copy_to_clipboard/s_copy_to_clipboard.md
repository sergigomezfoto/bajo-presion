
## s_c2c(var) 


copy to clipboard the content of a var

* var: it contains a text or number or whatever.


usage (h:m:s):
```
<!-- the action called inside other action -->
        <action name="copy" scope="local">
            calc(copy, xml.scene + '|' + view.hlookat + '|' + view.vlookat );
            s_c2c(get(copy));
        </action>

```
result:
```
when you make ctrl + v it will be pasted :  scene_10|30.5655554|-2.4118411  <···  scene|hlookat|vlookat

```

</br>

___
