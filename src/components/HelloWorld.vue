
<template >
  <!-- <p class="text-red-600 text-2xl font-bold">Hello</p> -->
   <!-- <div class=" bg-blue-300 gap-8 columns-2 md:columns-4">
     <img class="aspect-square py-5 w-full" src="./download (1).jpeg" alt="">
    <img class="aspect-video w-full py-5" src="./download (2).jpeg" alt="">
    <img class="aspect-video w-full py-5" src="./download.jpeg" alt="">
    <img class="aspect-video w-full py-5" src="./images (1).jpeg" alt="">   
  </div>  -->

  <div :class="{bcDark:darkM}" class="max-w-full bg-red-400 max-h-full">

 
  <div class="flex">
    <div  class="mx-auto  ">
      <button :class="{btnDark:darkM}" class="border border-red-700 rounded-3xl bg-black text-white" @click="onOff(dec)">{{ dec }}</button>
    </div>
  </div>

  <div :class="{bcDark:darkM}" class="container  rounded-md  px-8 py-8 ">
    <div :class="{fontD:darkM}" class="h-800 rounded-2xl shadow-2xl   py-2 px-2 text-center text-white  bg-red-500 grid lg:grid-cols-4 sm:grid-cols-2 gap-2 md:grid-cols-3 ">
      <p :class="{bcDark:darkM}" class=" line-clamp-3 py-1  md:col-span-full lg:col-span-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae praesentium nesciunt ab ad autem placeat expedita iste pariatur eveniet debitis!</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 h-auto text-center py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et ipsam facilis impedit eius quisquam.</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 md:col-span-2 lg:col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias iste doloremque? Voluptates, dolorem tempore!</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 md:col-span-2 lg:col-span-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est consequuntur expedita magnam explicabo veniam adipisci dolore repudiandae accusamus.</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolore a. Repellendus iure reiciendis saepe iste.</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis deleniti unde iste eum pariatur dolor dolorem.</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 md:col-span-2 lg:col-span-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nisi magnam error cumque?</p>
      <p :class="{bcDark:darkM}" class="line-clamp-3 py-1 md:col-span-full lg:col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit rem aperiam reprehenderit nostrum! </p>
    </div> 
  </div>

  <div :class="{grayD:darkM}" class="mt-[100px] rounded-2xl container  px-8 py-8 ">
    <div :class="{fontD:darkM}" class="h-800 py-2 hover:p-5 shadow-2xl text-center rounded-3xl px-2 text-white  bg-red-500 grid lg:grid-cols-4 sm:grid-cols-2 gap-2 md:grid-cols-6 ">
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-2 md:col-end-6 lg:col-span-1 hover:p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae praesentium nesciunt ab ad autem placeat expedita iste pariatur eveniet debitis!</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 md:col-start-1 md:col-end-3 lg:col-span-1 py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et ipsam facilis impedit eius quisquam.</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-5 md:col-end-7 lg:col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias iste doloremque? Voluptates, dolorem tempore!</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-2 md:col-end-6 lg:col-span-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est consequuntur expedita magnam explicabo veniam adipisci dolore repudiandae accusamus.</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-1 md:col-end-3 lg:col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dolore a. Repellendus iure reiciendis saepe iste.</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-5 md:col-end-7 lg:col-span-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis deleniti unde iste eum pariatur dolor dolorem.</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-2 md:col-end-4 lg:col-span-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nisi magnam error cumque?</p>
      <p :class="{grayD:darkM}" class="line-clamp-3 py-1 md:col-start-4 md:col-end-6 lg:col-span-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit rem aperiam reprehenderit nostrum! </p>
    </div> 
  </div>


</div>

</template>

  <script setup>
  import { ref } from 'vue';

  let darkM = ref(false);
  let dec = ref("Dark Mode");
  function onOff(val){
    if(val == "Light Mode"){
      darkM = false;
    dec.value = "Dark Mode"
    }else{
      darkM = true;
      dec.value = "Light Mode"
    }
  }
  
  
  </script>

<style scoped>
  .temp {
    @apply w-96 h-36 rounded-2xl grid grid-cols-3 bg-black mx-auto mt-5 
  }

  .inside{
    @apply rounded-r-full w-20 h-9 bg-gray-400 p-9 mx-auto my-auto text-center text-white
  }

  .box{
    @apply rounded-2xl bg-green-700 h-[600px] w-[450px] mx-auto 

  }

  .bcDark {
    @apply bg-black 
  }
  .fontD{
    @apply text-white bg-brown-800
  }

  p{
    @apply shadow-2xl rounded-xl
  }

  .btnDark {
    @apply bg-red-600 text-white mb-4 border border-white 
  }

  .grayD{
    @apply bg-black text-pink-100
  }

</style>
