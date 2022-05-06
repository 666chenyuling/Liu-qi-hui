import  service from '@/utils/request'


export const createchatuploadimg = function (files,values,imgid,nickname){
    //转化为formData格式
    let formData = new FormData();
    formData.append('file', files);
    formData.append('imgid',imgid);
    console.log(values);
    formData.append('createchat',{...values});

     //发请求
  console.log('formData',formData.get('file'));
    return service.request({
          url:'/indexpage/createchatuploadimg',
          method:'post',
        //   dataType:'json',
          headers: {  'Content-Type': 'multipart/form-data' },
          data:formData,
          params:{
            groupchatcolor:values.groupchatcolor[0],
            groupchatcontent:values.groupchatcontent,
            groupchatname:values.groupchatname,
            grouptags:values.grouptags,
            groupchatleader:nickname
          }
    })
}


