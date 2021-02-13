## WEBCOLORS

webcolors api is an app where you can find names of colors with their hex and rgb values. Over 146 html colors that can be rendered on the web. 

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

To get a specific color by type e.g name, hex or rgb:

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

To search for a color

## REQUEST

https://webcolors-api-product.herokuapp.com/api/v1/colors/search?value=gold

## COMPULSORY QUERY PARAMS
- **value**: specifies the color you are searching for

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

To get a specific color by the name:

## REQUEST

https://webcolors-api-product.herokuapp.com/api/v1/colors/color?name=lightgoldenrodyellow

## COMPULSORY QUERY PARAMS
- **name**: specifies the name of the color



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


## ERROR RESPONSE EXAMPLE

``
code: 401
"status": "error",
    "message": {
        Alphanumeric values only
    },
    
```


*Created with love by chubbyCode Happy coding*
