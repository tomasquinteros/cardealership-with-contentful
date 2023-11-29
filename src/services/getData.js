export default async function getData (url) {
  return fetch(url).then(res => res.json).then(data => {
    console.log(data)
    return data})
}