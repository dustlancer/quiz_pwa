export {AboutScreen};
import { AboutTopBar } from "./topbar.js";


let contacts_list = [
  {link: 'https://github.com/dustlancer', icon: 'github.png', title: 'github'},
  {link: 'https://vk.com/dustlancer', icon: 'vk.png', title: 'vk'},
  {link: 'https://instagram.com/dustlancer', icon: 'instagram.png', title: 'instagram'}
];
class AboutScreen {
    constructor(parent) {
        this.parent = parent;
        this.render();
    }

    render() {
        let top_bar = new AboutTopBar(this.parent);

      
      	let contacts = document.createElement("div");
      	contacts.className = "flex flex-col items-start gap-2 text-2xl text-white mt-5";
      	for (let i = 0; i < contacts_list.length; i++) {
            let contact_comp = document.createElement('div');
            contact_comp.className = "flex flex-row items-center font-bold hover:text-red-500 ease-in duration-200";
          	
          	let contact_icon = document.createElement('img');
          	contact_icon.src = `./resources/images/socnet_icons/${contacts_list[i].icon}`;
          	contact_icon.className = 'w-16 mr-5';
          	contact_comp.append(contact_icon);
          
          	let contact_link = document.createElement('a');
          	contact_link.textContent = contacts_list[i].title;
          	contact_link.href = contacts_list[i].link;
    		contact_link.target = 'blank';
          	contact_comp.append(contact_link);
            // contact_comp.textContent = contacts_list[i].link;
            contacts.append(contact_comp);
      	}
      	this.parent.append(contacts);
    }
}