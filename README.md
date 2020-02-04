## WEBCOLORS

webcolors api is an app that gives developers access to over 146 html colors that can be rendered on the web, the color name, the nex value and the rgb value. 

## API call Examples

To get random colors:

## REQUEST

https://webcolors-api-product.herokuapp.com/api/v1/colors

## RESPONSE

```
  "status": "success",
    "data": [
        {
            "id": 70,
            "name": "lightgoldenrodyellow",
            "hex": "#FAFAD2",
            "rgb": "250, 250, 210"
        },
    ]
```

To get a specific color by name or hex or rgb:

## REQUEST

https://webcolors-api-product.herokuapp.com/api/v1/colors/color?type=name&value=gold&showing=0

## COMPULSORY QUERY PARAMS
- **type**: specifies what color type you want
- **value**: specifies the name of color you want
- **showing**: This returns paginated values and increases by 7 for the next                seven available search options 


## RESPONSE

```
"status": "success",
    "data": [
        {
            "id": 70,
            "name": "lightgoldenrodyellow",
            "hex": "#FAFAD2",
            "rgb": "250, 250, 210"
        },
    ]
```

*Created with love by chubbyCode Happy coding*
