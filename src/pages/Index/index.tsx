import { useEffect, useState } from "react";
import { history, useModel, request } from "umi";
import { Button, Space, List, Divider, Modal, Typography } from "antd"
import { getList, deleteOneArticle } from "@/services/article"
import styles from "./index.less"

const Index: React.FC = () => {
  const [list, setList] = useState<any[]>()
  const { initialState } = useModel("@@initialState")

  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    const res = await getList()
    setList(res.data)
  }
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        deleteArticle(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  const deleteArticle = async (id: number) => {
    await deleteOneArticle(id);
    loadData();
  }
  const handleEdit = (id: number) => {
    history.push({
      pathname: `/edit/${id}`,
    })
  }
  const toDetail = (id: number) => {
    history.push({
      pathname: `/detail/${id}`,
    })
  }
  return (
    <>
      <List
        header='文章列表'
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(article) => (
          <List.Item
            key={article.id}
            actions={[
              <Button
                onClick={() => {
                  handleEdit(article.id)
                }}
              >
                编辑
              </Button>,
              <Button
                onClick={() => {
                  handleDelete(article.id)
                }}>
                删除
              </Button>
            ]}
          >
            <div
              className={styles.listItem}
              onClick={() => {
                toDetail(article.id)
              }}>{article.title}</div>
          </List.Item>
        )}
      />
      <Divider plain>分隔线</Divider>
      <Button type="primary" onClick={() => { history.push("/post") }}>增加新文章</Button>
    </>
  );
}
export default Index;