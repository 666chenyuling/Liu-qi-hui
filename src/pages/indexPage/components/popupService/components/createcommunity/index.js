import React,{ useState,useContext} from 'react'
import { Form,Input,Button,TextArea,Selector, ImageUploader,Toast} from 'antd-mobile'
// import { demoSrc, mockUpload, mockUploadFail } from './utils'
import {createchatuploadimg} from '@/api/indexpage'
import {StoreContext} from '@/store/StoreContext'
import './index.css'

const demoSrc ='https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'


function Createcommunity(props) {
    const [fileList, setFileList] =useState([])
    const [file,setFile]=useState(null)
    const [imgid,setImgid]=useState('')
    const {state} = useContext(StoreContext)
    async function  sleep(files,values,nickname){
      if(!files)return
     let res=await createchatuploadimg(files,values,imgid,nickname)
    console.log('res',res);
      setImgid(res.data.oid)
      if(res.code==='ok'){
        Toast.show('社区创建成功')
        props.setServicevisible(false)

      }
    }
    async function mockUpload(file) {
      // console.log('file',file);
      // console.log('files',fileList);
        setFile(file)
        
        return {
          url: URL.createObjectURL(file),
        }
      }
    async function mockUploadFail() {
        
        throw new Error('Fail to upload')
      } 
    const  onFinish=async(values)=>{
      // console.log('社区',state);
      
      let ress=await sleep(file,values,state.usermessage.nickname)
      
    }  
    const beforeUpload=(file)=> {
        if (file.size > 1024 * 1024) {
          Toast.show('请选择小于 1M 的图片')
          return null
        }
        // setFileList()
        return file
      }
     
    return (
        <div style={props.servicetype==='社区创建'?{display:'block'}:{display:'none'}}>
           <Form
            layout='horizontal'
            footer={<Button block type='submit' color='primary' size='large'>提交 </Button>}
            onFinish={onFinish}
            >
             <Form.Item
              name='groupchatname'
              label='群名称'
              rules={[{ required: true, message: '群名称不能为空' }]}
             >
              <Input  placeholder='请输入群名' />
             </Form.Item>
             <Form.Item name='grouptags' label='群标签' rules={[{ required: true, message: '群标签至少选择一个' }]}>
             <Selector
              columns={5}
              options={[
              { label: '餐饮', value: 'eat' },
              { label: '旅游', value: 'travel' },
              { label: '游戏', value: 'game' },
              { label: '美妆', value: 'beautymakeup' },
              { label: '商业', value: 'business' },
            ]}
          />
          </Form.Item>
             <Form.Item name='groupchatcontent' label='群简介' rules={[{ required: true, message: '群简介不能为空' }]} >
              <TextArea
                placeholder='请输入群简介'
                maxLength={30}
                rows={2}
                showCount
              />
            </Form.Item>
            <Form.Item name='groupchatcolor' label='群背景色'  rules={[{ required: true, message: '群背景色至少选择一个' }]}>
             <Selector
              columns={3}
              options={[
              { label: '红', value: ['rgba(248,0,0,1)','rgba(255,255,0,0.1)'] },
              { label: '绿', value: ['rgba(0,156,144,1)','rgba(255,255,0,0.1)'] },
              { label: '紫', value: ['rgba(0,15,144,1)','rgba(255,255,0,0.1)'] },
            ]}
          />
          </Form.Item>
          <Form.Item name='backgroundimg' label='群背景图片'  rules={[{ required: true, message: '群背景图不能为空' }]}>
           < ImageUploader
           value={fileList}
           onChange={setFileList}
           upload={mockUpload}
           beforeUpload={beforeUpload}
           maxCount={1}
             />
          </Form.Item>
      </Form>
        </div>
    )
}

export default Createcommunity
