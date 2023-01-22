# RP

Instructions:

1. Clone repository
2. Run `npm install`
3. Run `npm run start` or `npm run start-dev`
4. Call POST `localhost:3001/findHotel` with JSON payload, e.g.: `{
    "adults": 2,
    "check_in": "2023-02-01",
    "check_out": "2023-02-02",
    "country": "United Kingdom",
    "currency": "EUR",
    "hotel_name": "Vilenza Hotel",
    "language": "lt",
    "location": "London",
    "no_rooms": 1
}`

```
curl --location --request POST 'localhost:3001/findHotel' \
--header 'Content-Type: application/json' \
--data-raw '{
    "adults": 2,
    "check_in": "2023-02-01",
    "check_out": "2023-02-02",
    "country": "United Kingdom",
    "currency": "EUR",
    "hotel_name": "Vilenza Hotel",
    "language": "lt",
    "location": "London",
    "no_rooms": 1
}'
```
