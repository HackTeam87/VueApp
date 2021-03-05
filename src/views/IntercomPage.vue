<template>
  <div>
    <h1 class="heading">Домофон</h1>
    <v-container>
      <v-row>
        <v-col col="12" xs="12" sm="6" md="6" lg="6">
          <v-card class="pricingTable">
            <v-icon aria-hidden="false" left class="mdi-48px">mdi-phone-incoming</v-icon>
            <div class="pricingTable-header">
              <h3 class="title">Домофон Аудио</h3>
              <span class="price-value">20</span>
            </div>
            <ul class="pricing-content">
              <li class="body-1">20 грн/місяць</li>
              <li>Вартість підключення 350грн</li>
            </ul>
          </v-card>
        </v-col>
        <v-col col="12" xs="12" sm="6" md="6" lg="6">
          <v-card class="pricingTable">
            <v-icon aria-hidden="false" left class="mdi-48px">mdi-phone-incoming</v-icon>
            <div class="pricingTable-header">
              <h3 class="title">Домофон Видео</h3>
              <span class="price-value">40</span>
            </div>
            <ul class="pricing-content">
              <li class="body-1">40 грн/місяць</li>
              <li>Вартість підключення 500грн</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.pricingTable {
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 30px 10px;
  text-align: center;
  margin-top: 30px;
  color: #292929;
  perspective: 700px;
  z-index: 1;
  position: relative;
  transition: all 0.3s ease-in-out 0s;
}

.pricingTable:hover {
  color: #fff;
}

.v-icon {
  color: #ffffff;
}

.pricingTable:after {
  content: "";
  width: 100%;
  height: 100%;
  background: #002244;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  transform: rotateY(70deg);
  transition: all 0.3s ease-in-out 0s;
}

.pricingTable:hover:after {
  opacity: 1;
  transform: rotateY(0deg);
  border: solid 2px #fec422;
}

.pricingTable .icon {
  width: 69px;
  height: 69px;
  line-height: 69px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  font-size: 25px;
  color: #002244;
  position: absolute;
  top: -34px;
  left: 0;
  right: 0;
}

.pricingTable .pricingTable-header {
  margin-bottom: 30px;
}

.pricingTable .title {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 10px 0;
}

.pricingTable .price-value {

  border-bottom: 5px solid #002244;
  font-size: 30px;
  font-weight: 700;
  transition: all 0.3s ease-in-out 0s;
}

.pricingTable:hover .price-value {
  border-bottom-color: #fff;
}

.pricingTable .pricing-content {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.pricingTable .pricing-content li {
  font-size: 14px;
  line-height: 40px;
}

.pricingTable .pricingTable-signup {
  padding: 9px 23px;
  background: #002244;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  transition: all 0.25s ease-in-out 0s;
}

.pricingTable:hover .pricingTable-signup {
  background: #fff;
  color: #002244;
}

.pricingTable .pricingTable-signup:before,
.pricingTable .pricingTable-signup:after {
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  transition: all 0.25s ease-in-out 0s;
}

.pricingTable .pricingTable-signup:before {
  left: -12px;
  border-right: 12px solid #002244;
}

.pricingTable .pricingTable-signup:after {
  right: -12px;
  border-left: 12px solid #002244;
}

.pricingTable:hover .pricingTable-signup:before {
  border-right-color: #fff;
}

.pricingTable:hover .pricingTable-signup:after {
  border-left-color: #fff;
}
</style>