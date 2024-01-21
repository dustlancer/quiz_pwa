
export { AboutTopBar };

class AboutTopBar {
    constructor(parent) {
        this.parent = parent;
        this.username = sessionStorage.getItem("username");
        this.render();
    }

    render() {
        let header = document.createElement('div');
        header.className = 'header flex flex-row items-center justify-start w-screen font-bold text-white text-3xl p-5 border-b-2 border-indigo-500';
        let home_btn = document.createElement('img');
        home_btn.className = 'h-16 p-3 glassy';
        home_btn.src = './resources/images/home-icon.png';
        home_btn.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent("change_route", {
                detail: {
                    route: "home",
                }
            }));
        });


        let logout_btn = document.createElement('img');
        logout_btn.className = 'h-16 p-3 glassy';
        logout_btn.src = './resources/images/logout-icon.png';
        logout_btn.addEventListener('click', () => {
            sessionStorage.removeItem("username");
            window.dispatchEvent(new CustomEvent("change_route", {
                detail: {
                    route: "home",
                }
            }));
        });



        header.append(home_btn);
        this.parent.append(header);
    }
}