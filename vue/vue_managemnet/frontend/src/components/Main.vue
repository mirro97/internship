<template>
  <div>
    <header>
      <h1 class="main_title">
        <a href="#">공길이 관리자페이지</a>
      </h1>
    </header>
    <nav>
      <h1 class="nav_title hidden">네비게이션 메뉴</h1>
      <ul class="nav_menu">
        <li class="nav_content">
          <router-link to="/main/test" class="nav_link">
            메인페이지로 이동
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardAll" class="nav_link">
            전체 게시판 관리
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardNews" class="nav_link">
            공시뉴스 게시판
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardFree" class="nav_link">
            자유 게시판
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardStudy" class="nav_link">
            스터디
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardSchedule" class="nav_link">
            스케줄 & 공부량
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/boardStudyAmout" class="nav_link">
            공부량
          </router-link>
        </li>
        <li class="nav_content">
          <router-link to="/main/userList" class="nav_link">
            유저 관리
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  display: inline-block;
  height: 100%;
  text-decoration: none;
}

ul {
  list-style: none;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #15a58d;
  box-shadow: 0px 0px 6px 0px rgba(50, 50, 50, 0.8);
  height: 49px;
}

.main_title {
  display: block;
  font-size: 20px;
  padding-left: 20px;
}

.main_title a {
  color: #fff;
  height: 49px;
  line-height: 49px;
}

.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

/* nav css */
nav {
  margin-top: 49px;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 200px;
  height: 100%;

  border-right: 1px solid #dee2e6;
  /* border-right: 1px solid #e9ecef; */
}

.nav_menu {
  padding: 0;
  padding-top: 15px;
}

.nav_content {
  text-align: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: 400;
}

.nav_content:hover {
  background-color: #e9ecef;
  box-shadow: 0 4px 4px -4px #f1f3f5;
}

.nav_link {
  width: 100%;
  line-height: 40px;
}
</style>
