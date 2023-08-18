____

# S_EVENTS
Those actions are triggered like krpano events.

it need the xml element <s_events ... />

` Allways have to have  name="[name]"`

---
## visibility

### onwindowinvisible="someaction()"
when the user change tab, or mimimize the window or look to another thing

### onwindowvisible="someaction()"
when the user return to thw tour window

variables created:
 * s_noview_elapsed: the time in ms of the last noview event
 * s_noview_elapsed_total: the total time in ms of the noview events during all the session (sumatory of all s_noview_elapsed).
