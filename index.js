const discussion = (() => {

    let subject, ques, submitQues, left, newQuesBtn, c = 0;

    const addHtml = () => {
        subject = document.getElementById('subject');
        ques = document.getElementById('ques');
        submitQues = document.getElementById('submitQues');
        left = document.getElementById('left');
        newQuesBtn = document.getElementById('newQues');
    }

    const createElement1 = () => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let hr = document.createElement('hr');
        return { div, h2, p, hr };
    }

    const createElement2 = () => {
        let h1 = document.createElement('h1')
        let p = document.createElement('p');
        let input = document.createElement('input')
        input.type = 'text';
        input.id = 'subject';
        let textArea = document.createElement('textarea');
        textArea.id = 'ques';
        textArea.rows = '17';
        textArea.cols = '110';
        let btn = document.createElement('button');
        btn.setAttribute('id', 'submitQues');
        return { h1, p, input, textArea, btn };
    }

    const submitClick = () => {
        submitQues.addEventListener('click', () => {
            let obj = createElement1();
            obj.div.setAttribute('class', 'left_ques')
            obj.div.id = c;
            c++;
            obj.h2.textContent = subject.value;
            obj.p.textContent = ques.value;
            obj.div.append(obj.h2, obj.p, obj.hr);
            left.append(obj.div);
            obj.div.addEventListener('click', () => {
                joMrzi(obj.div.id);
            });
        })
    }

    const createElement3 = () => {
        let div = document.createElement('div');
        div.setAttribute('id', 'main2');
        let h2q = document.createElement('h2');
        let divQues = document.createElement('div');
        divQues.setAttribute('class', 'doubt');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let h2r = document.createElement('h2');
        let divRes = document.createElement('div');
        let h2a = document.createElement('h2')
        let divAdd = document.createElement('div');
        divAdd.setAttribute('id', 'addResponse');
        return { div, h2q, divQues, h3, p, h2r, h2a, divAdd, divRes };
    }

    const joMrzi = (id) => {
        if (id) {
            let elem = document.getElementById(id);
            let right_main = document.getElementById('right_main');
            right_main.textContent = '';
            let obj = createElement3();
            obj.h2q.textContent = 'Questions';
            obj.h2q.style.fontSize = '30px'
            obj.h2r.textContent = 'Response';
            obj.h2r.style.fontSize = '30px'
            obj.h2a.textContent = 'Add Response';
            obj.h2a.style.fontSize = '30px'
            obj.divAdd.append(obj.h2a);
            add_Response(obj);
            obj.h3.textContent = elem.children[0].textContent;
            obj.p.textContent = elem.children[1].textContent;
            obj.divQues.append(obj.h3, obj.p);
            obj.div.append(obj.h2q, obj.divQues, obj.h2r, obj.divRes, obj.divAdd);
            right_main.append(obj.div);
        }
    }

    const add_Response = (obj) => {
        let input = document.createElement('input')
        input.type = 'text';
        input.id = 'username';
        input.placeholder = 'Enter Name'
        let textArea = document.createElement('textarea');
        textArea.id = 'response';
        textArea.rows = '10';
        textArea.cols = '110';
        textArea.placeholder = 'Enter Comment';
        let br = document.createElement('br');
        let btn = document.createElement('button');
        btn.setAttribute('id', 'submitQues');
        btn.textContent = 'Add';
        obj.divAdd.append(input, textArea, br, btn);
        btn.addEventListener('click', () => {
            gotResponse(obj)
        });
    }
    const gotResponse = (obj) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'doubt');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.textContent = username.value;
        p.textContent = response.value
        div.append(h3, p);
        obj.divRes.append(div);
    }

    const rightMain = () => {
        let right_main = document.getElementById('right_main');
        let obj = createElement2();
        obj.h1.textContent = "Welcome To Discussion Portal !";
        obj.p.textContent = "Enter a subject and Question to get started";
        obj.btn.textContent = 'Submit';
        right_main.append(obj.h1, obj.p, obj.input, obj.textArea, obj.btn);
        addHtml();
        submitClick();
    }

    const newQues = () => {
        newQuesBtn.addEventListener('click', () => {
            let right_main = document.getElementById('right_main');;
            right_main.textContent = '';
            rightMain();
        });
    }

    return { addHtml, rightMain, newQues };
})();

function abc() {
    discussion.rightMain();
    discussion.addHtml();
    discussion.newQues();
}

abc();