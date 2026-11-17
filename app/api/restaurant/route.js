export async function GET() {
  return Response.json([
    {
id:1,
restaurant:"Spice Garden Restaurant",
gst:"07ABCDE1234F1Z5",
address:"New Delhi"
},
{
id:2,
restaurant:"Royal Dine",
gst:"27FGHIJ5678K1Z2",
address:"Mumbai"
},
{
id:3,
restaurant:"Food Junction",
gst:"36LMNOP9012Q1Z3",
address:"Hyderabad"
},
{
id:4,
restaurant:"Urban Tadka",
gst:"29RSTUV3456W1Z4",
address:"Bangalore"
},
{
id:5,
restaurant:"The Curry House",
gst:"24ABCDE5678F1Z9",
address:"Pune"
}
  ]);
}