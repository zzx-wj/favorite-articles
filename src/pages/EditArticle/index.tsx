import React, { useEffect } from 'react';
import { history, useMatch } from "umi";
import { Button, Form, Input, InputNumber, Select, message } from "antd"
import { getArticle, updateArticle } from "@/services/article"
// 发布页
const Index = () => {
  const match = useMatch("/edit/:id")
  const [form] = Form.useForm();

  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    const res = await getArticle(Number(match?.params.id))
    console.log(res.data.title);

    form.setFieldsValue({
      title: res.data.title,
      tage: res.data.tage,
      content: res.data.content,
    })
  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} 是必填项!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  interface newArtile {
    title: string
    tags: string
    content: string
  }
  const onFinish = (values: newArtile) => {
    update({
      ...values,
      id: Number(match?.params.id),
    })
  };
  interface updateValue extends newArtile {
    id: number
  }
  const update = async (values: updateValue) => {
    await updateArticle(values);
    message.success("文章更新成功", 0.5, () => {
      history.back()
    })
  }
  return (
    <div>
      <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['title']}
          label="标题"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['tags']}
          label="标签"
        >
          <Select>
            <Select.Option value="shi">诗</Select.Option>
            <Select.Option value="ci">词</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          name={[ 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item> */}
        <Form.Item
          name={['content']}
          label="内容"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            更新内容
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Index;
