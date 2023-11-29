import getData from "./getData";
const URL_ASSETS = 'https://cdn.contentful.com/spaces/tb7md34xcwav/environments/master/assets?access_token=L9NhWGFdx3L-nTGLJ5fBE2NhVmywNZm70GOIMkhLtac'
const URL_DATA = 'https://cdn.contentful.com/spaces/tb7md34xcwav/environments/master/entries/5YwGiXamEWSTW46O2g0Z1s?access_token=L9NhWGFdx3L-nTGLJ5fBE2NhVmywNZm70GOIMkhLtac'

export async function Data () {
  const data = await getData('https://cdn.contentful.com/spaces/tb7md34xcwav/environments/master/entries/5YwGiXamEWSTW46O2g0Z1s?access_token=L9NhWGFdx3L-nTGLJ5fBE2NhVmywNZm70GOIMkhLtac')
  console.log(data)
  return data
} 