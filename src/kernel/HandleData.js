export default function HandleData(request, response) {
  console.log(request.body);
  response.send(200);
}
