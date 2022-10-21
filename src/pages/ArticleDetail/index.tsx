import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { history, useMatch } from 'umi';
import { getArticle } from "@/services/article"

const Index = () => {
  const [article, setArticle] = useState<string>('');
  const match = useMatch("/detail/:id")
  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    const res = await getArticle(Number(match?.params.id))
    setArticle(res.data.content)
  }
  return (
    <div>
      {article}
    </div>
  );
}

export default Index;
