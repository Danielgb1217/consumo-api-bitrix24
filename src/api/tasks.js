import axios from 'axios'

const apiBitrix={
    tasks: function(){
         return axios.get('https://b24-lcvnqs.bitrix24.es/rest/1/5o18ndm65ly5menm/task.ctaskitem.getlist.json')       
    }
}

export default apiBitrix