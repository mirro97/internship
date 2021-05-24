import ListView from "./ListView";
import bus from "../utils/bus";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    // el: "",
    // data: "",
    // components: {}
    // created(){}
    name: name,
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:spinner");
          })
          .catch(error => {
            console.log(error);
          });
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  };
}
