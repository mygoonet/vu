<template>
<!--  <section>-->
<!--    <form @submit.prevent="setPost">-->
<!--      <div>-->
<!--        <label for="userId">UserID:</label>-->
<!--        <input type="number" id="userId" v-model="postData.userId">-->

<!--      </div>-->
<!--      <div>-->
<!--      <input type="file" name="img" accept="image/x-png,image/gif,image/jpeg" />-->
<!--      </div>-->

<!--      <div>-->
<!--        <label for="title">Title: </label>-->
<!--        <input type="text" id="title" v-model="postData.title">-->
<!--      </div>-->
<!--      <div>-->
<!--        <label for="body">Body: </label>-->
<!--        <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>-->
<!--      </div>-->
<!--      <button>Create Post</button>-->
<!--    </form>-->
<!--  </section>-->

  <router-link to="/">Go to Home177722</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-view v-slot="{ Component }">

      <component :is="Component"></component>

  </router-view>



  <form
      id="form"
      enctype="multipart/form-data"
      action="http://localhost:8080/webapp/check"
      method="POST"
  >
    <input class="input file-input" type="file" name="file" multiple />
    <button class="button" type="submit">Submit</button>
  </form>



  <form class="input file-input" id="form" novalidate @submit.prevent="onSubmit" enctype="multipart/form-data" >
    <input type="file" @change="addFile" name="file" />
    <button>Create Post</button>-->
  </form>
</template>

<script>


export default {
  name: "MyForm",

  data() {
    return {
      file: null,
      postData: {

        userId: {
          userId: null,
          required: true,
          default: 10,
          validator:(value) => value >=10,

        },

        query_id: "query_id=AAF9hiQEAAAAAH2GJAQ-iW6s&user=%7B%22id%22%3A69502589%2C%22first_name%22%3A%22M%22%2C%22last_name%22%3A%22E%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1706664309&hash=1ca67600e5fc84e43e985e8a36f3e69a1ed5b08167e270647646f571e19a9619",
        body: ''
      }
    }
  },
  methods: {


    addFile(e) {
      this.file = e.target.files[0];
    },
    onSubmit() {
      console.log(this.file);

      const formData = new FormData();
      formData.append('file', this.file);

console.log(formData)
      fetch('http://localhost:8080/webapp/check', {
        method: 'POST',
        body: formData


          //body: this.body

      })
      .then(response => response.json())
          .then(data => console.log(data))
    }




      // post the form to the server
    },






    


    setPost()


    {
     console.log("test")
      console.log(this.postData.userId)
      console.log(this.postData.query_id)

      fetch('http://localhost:8080/webapp/check', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({
            query_id: this.postData.query_id,
              id:    this.postData.userId,


          //body: this.body
        })
      })
         // .then(response => response.json())
        //  .then(data => console.log(data))
    }


}
</script>

<style>
html, body {
  margin: 0;
  padding: 0
}

section {
  height: 100vh;
  display: grid;
  justify-items: center;
  padding-top: 40px
}

div {
  margin: 24px auto
}

label {
  font-weight: bolder;
  display: block;
  margin-bottom: 4px
}
</style>