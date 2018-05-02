# Polymer <3
## Goal: Use the platform
---
- Utilería
- Utiliza una arquitectura de web components

### Web components
1. HTML Imports
2. Templates
3. Custom Elements
4. Shadow DOM

## DOM
### **Data Object Model** 

To interact, Convert maquetado HTML -> HTMLElement in JS

## Web component HTML Imports
my-component.html
```
<dom-bind>
    <style></style>
    <html></html>
</dom-bind>
    <sript></script>
```

index.html
```
<link rel = "import" href = "../..path/my_component.html">
<my_component></my_component>
```

## Polymer 2
- ECS6
- class, constructor, callbacks

## Communication
```
<Father>
    <son>
    </son>
</Father>
```
Father to Son: use Data-bindins

Son to Father: Custom events

Example

Son
```js
this.dispatchEvent(
    new CustomEvent(
        @todo
    );
);
```

Father
```js
<wc1 on-event-name = "myFunct" ></wc1>
```

