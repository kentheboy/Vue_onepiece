// Vueインスタンスを作成
const app1 = new Vue({
    // オプションオブジェクトの作成
    el: "#ex1", //specify the DOM element tobe related with the vue
    data: {
        luffy: "海賊王になる男"
    },
});

const app2 = new Vue({
    el: "#ex2",
    data: {
        url: "chopper.html",
        devil: "悪魔の実"
    }
})

const app3 = new Vue({
    el: "#ex3",
    data: {
        four_emperors: [
            "白ひげ","カイドウ","ビッグマム","シャンクス"
        ]
    }
})

const app4 = new Vue({
    el: "#ex4",
    data: {
        devil_fruits: {
            luffy: "ゴムゴムの実",
            chopper: "ヒトヒトの実",
            robin: "ハナハナの実",
            brook: "ヨミヨミの実"
        }
    }
})

const app5 = new Vue({
    el: "#ex5",
    data: {
        devil: "悪魔の実",
        name: "ゴムゴムの実"
    }
})

const app6 = new Vue({
    el: "#ex6",
    data: {
        devil: "悪魔の実",
        name: "ゴムゴムの実"
    }
})

const app7 = new Vue({
    el: "#ex7",
    data: {
        devil: "悪魔の実",
        name: "ゴムゴムの実"
    }
})

const app8 = new Vue({
    el: "#ex8",
    data: {
        bounty: "",
        count: ""
    },
    computed: {
        total() {
            // this = Vueインスタンス
            return this.bounty * this.count
        }
    }
})

const app9 = new Vue({
    el: "#ex9",
    data: {
        bounty: "",
        count: ""
    },
    methods: {
        total() {
            // this = Vueインスタンス
            return this.bounty * this.count
        }
    }
})

const app10 = new Vue({
    el: "#ex10",
    data: {
        bounty: "",
        count: ""
    },
    computed: {
        total() {
            // this = Vueインスタンス
            return this.bounty * this.count
        },
        bounty1() {
            return Math.floor(Math.random() * 10000)
        }
    },
    methods: {
        bounty2() {
            return Math.floor(Math.random() * 10000)
        }
    }
})

const app11 = new Vue({
    el: "#ex11",
    data: {
        eat: false
    }
})

const app12 = new Vue({
    el: "#ex12",
    data: {
        eat: false
    }
})

const app13 = new Vue({
    el: "#ex13",
    data: {
        eat: false
    }
})

/* ライフサイクルの種類ごとにメソッドがある
beforeCreate() :インスタンスが初期化された直後
created() :インスタンスが作成された後
beforeMount() :マウントがはじまる直前
       マウント: vue.jsのデータをhtmlに反映させる
mounted() :インスタンスがマウントされた後

this.$data・・・Vueのデータオプションを参照
this.$el・・・・DOMを参照
*/
const app14 = new Vue({
    el: "#ex14",
    data: {
      count: 0,
    },
    beforeCreate() {
      console.log(`beforeCreate:this.$data ${this.$data}`);
      console.log(`beforeCreate:this.$el ${this.$el}`);
    },
    created() {
      console.log(`created:this.$data ${this.$data}`);
      console.log(`created:this.$el ${this.$el}`);
      console.log(this.$data);
    },
    beforeMount() {
      console.log(`beforeMount:this.$el`);
      console.log(this.$el);
    },
    mounted() {
      console.log(`mounted:this.$el`);
      console.log(this.$el);
    },
    methods: {
      addCount() {
        this.count += 1;
      },
    },
  });

// "Vue.component" method is used to cleate DOM component that can be reused
// 1st param: name of the componet, 2nd param: content of the component 
// ※note that the component has to be defined before the Vue application mount on the DOM  
Vue.component("button-devil", {
    template: '<button>悪魔の実</button>'
})

const app15 = new Vue({
    el: "#ex15",
    data: {
        eat: false
    }
})

// * Vue component can have data in itself.
// ※note that the data is defined as function in the component, 
// therefore make sure not to define as property like normal vue application
// * Vue component can have methods in itself
Vue.component("button-conut", {
    data() {
        return { count: 0 }
    },
    methods: {
        addCount() {
            this.count += 1;
        }
    },
    template: `<button v-on:click="addCount">
                    悪魔の実を食べる<br>
                    能力者 {{count}} 人
               </button>`
})

const app16 = new Vue({
    el: "#ex16",
    data: {
        eat: false
    }
})

// when defining the DOM element in the Vue component,
// make sure to have single root element.
Vue.component("button-2characters", {
    // template: `<button>ゾロ</button>
    //             <button>サンジ</button>`
    template: `<div>
                <button>ゾロ</button>
                <button>サンジ</button>
            </div>`
                
})

const app17 = new Vue({
    el: "#ex17",
    data: {
        eat: false
    }
})

Vue.component("button-3characters", {
    data() {
        return { characters: ["ナミ", "ロビン", "ウソップ"] }
    },
    template: `<div>
                <button
                    v-for="character in characters"
                    v-bind:key="character">{{character}}</button>
            </div>`
                
})

const app18 = new Vue({
    el: "#ex18",
    data: {
        eat: false
    }
})

// In order to create local component follow following steps:
// #1: defin the template as simple constant
// #2: define component, while loading the template constant, in the Vue app
// Here↓↓↓↓#1
const characters = {
    template:   `<div>
                    <button-2characters></button-2characters>
                    <button-3characters></button-3characters>
                </div>`
}

const app19 = new Vue({
    el: "#ex19",
    // Here↓↓↓↓#２
    components: {
        "local-characters": characters
    }
})

// Using the feature of local structure, we can now create component relation(inheritation)
const child = {
    template: `<p>エース</p>`
}
const parent = {
    // define the component to be called as child.
    components: {
        "d-child": child
    },
    template: `<p>ロジャーの息子：<d-child></d-child></p>`
}

const app20 = new Vue({
    el: "#ex20",
    components: {
        "d-family": parent
    }
})

// 
const child2 = {
    template: `<p>{{name}}エース</p>`,
    // define the variable and it's name to be inherited
    props: ["name"]
}

const parent2 = {
    data() {
        return {
            name: "D・"
        }
    },
    components: {
        "d-child": child2
    },
    template: `<p>{{name}}ロジャーの息子：<d-child :name="name"></d-child></p>`
}

const app21 = new Vue({
    el: "#ex21",
    components: {
        "d-family2": parent2
    }
})

const child3 = {
    template: `<p>エース({{age-55}})<button v-on:click="AgeEvent">年齢＋1</button></p>`,
    // define the variable and it's name to be inherited
    props: ["age"],
    methods: {
        AgeEvent() {
            this.$emit("grow-old", this.age)
        }
    }
}

const parent3 = {
    data() {
        return {
            age: 55
        }
    },
    components: {
        "d-child": child3
    },
    template: `<p>ロジャー({{age}})の息子：
                    <d-child :age="age" v-on:"glow-old"="getAge"></d-child>
                </p>`,
    methods: {
        getAge(child_age){
            this.age = child + 1
        }
    }
}

const app22 = new Vue({
    el: "#ex22",
    components: {
        "d-family3": parent3
    }
})