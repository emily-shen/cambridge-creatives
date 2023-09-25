import { FormData } from 'formdata-node';
import fs from "fs";
import path from 'path';
import mime from 'mime';
import fetch, { blobFromSync } from 'node-fetch';


const base_url = "http://admin.cambridgecreatives.org"
const relations = JSON.parse(fs.readFileSync('./relations.json', 'utf8'))
const old_json = JSON.parse(fs.readFileSync('./old_qandas.json', 'utf8'))

const processOne = async (interview) => {
  let form_data = new FormData();
  let data = {
    "interviewee":interview.Name,
    "link":interview.Link,
    "description":interview.Description,
    "occupation":interview.Occupation,
    "interview_filters":interview.occupation_filters.map(entry => {
      console.log(entry.Occupation)
      return relations.interview_filters[entry.Occupation]
    }),
  }
  form_data.append('data', JSON.stringify(data))

  const response = await fetch('http://127.0.0.1:1337/api/interviews', {
    method: 'POST',
    body: form_data,
  });
}
const processAll = () => {
  return Promise.all(old_json.map(processOne))
}

processAll()

// const old_json = JSON.parse(fs.readFileSync('./old_articles.json', 'utf8'))

// const processOne = async (article) => {
//   let form_data = new FormData();
//   let data = {
//     "title":article.title,
//     "author":article.author,
//     "publish_date":article.date,
//     "leader":article.content.substring(0, 175),
//     "old_url":article.title.replace(" ","-"),
//     // "article_url":article.title.replace(" ","-"),
//     "article_filters":relations.article_filters[article.article_filter.ArticleType],
//     "article_body":[
//       {
//         "__component":"content.body-text",
//         "text":article.content
//       }
//     ]
//   }
//   console.log(data.article_filters)
//   form_data.append('data', JSON.stringify(data))

//   // download image

//   let filename = path.basename(article.cover_image.url)
//   let dest = fs.createWriteStream(filename);

//   await new Promise((resolve, reject) =>
//     fetch(base_url+article.cover_image.url)
//       .then((res) => res.body.pipe(dest).on("finish", () => resolve(true))) // add more error handling
//       .catch((e) => reject(e))
//   );
    
//   const file = blobFromSync(filename, mime.lookup(filename));
//   // console.log(mime.lookup(filename))
//   form_data.append('files.image_banner', file, filename);

//   const response = await fetch('http://127.0.0.1:1337/api/articles', {
//     method: 'POST',
//     body: form_data,
//   });
// }
// const processAll = () => {
//   return Promise.all(old_json.map(processOne))
// }

// processAll()

// const base_url = "http://admin.cambridgecreatives.org"
// const old_json = JSON.parse(fs.readFileSync('./old_committees.json', 'utf8'))

// const processOne = async (member) => {
//   let form_data = new FormData();
//   let data = {
//     "name":member.name,
//     "role":member.role,
//     "past_committee":member.year < 2022,
//     "bio":member.bio ? member.bio.substring(0, 399) : "",
//     "year":member.year
//   }
//   form_data.append('data', JSON.stringify(data))

//   // download image

//   let filename = path.basename(member.photo.url)
//   let dest = fs.createWriteStream(filename);

//   await new Promise((resolve, reject) =>
//     fetch(base_url+member.photo.url)
//       .then((res) => res.body.pipe(dest).on("finish", () => resolve(true))) // add more error handling
//       .catch((e) => reject(e))
//   );
    
//   const file = blobFromSync(filename, mime.lookup(filename));
//   console.log(mime.lookup(filename))
//   form_data.append('files.photo', file, filename);

//   const response = await fetch('http://127.0.0.1:1337/api/committee-members', {
//     method: 'POST',
//     body: form_data,
//   });
// }
// const processAll = () => {
//   return Promise.all(old_json.map(processOne))
// }

// processAll()
