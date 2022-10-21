import { request } from 'umi';
import { baseUrl } from '@/utils/util';

interface newArtile {
  title: string
  tags: string
  content: string
}
//获取文章列表
export const getList = () => {
  return request(`${baseUrl}/api/articles/list`, {
    method: "get"
  })
}
// 获取文章详情
export const getArticle = (id: number) => {
  return request(`${baseUrl}/api/articles/${id}`, {
    method: "get"
  })
}
// 新建文章
export const postNewArticle = (data: newArtile) => {
  return request(`${baseUrl}/api/articles/post`, {
    method: "post",
    data,
  })
}
// 删除文章
export const deleteOneArticle = (id: number) => {
  return request(`${baseUrl}/api/articles/deleteOne`, {
    method: "post",
    data: {
      id
    },
  })
}
interface updateValue extends newArtile {
  id: number
}
//更新文章
export const updateArticle = (data: newArtile) => {
  console.log(data);
  return request(`${baseUrl}/api/articles/update`, {
    method: "post",
    data,
  })
}