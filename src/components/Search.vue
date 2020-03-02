<template>
  <div :class="['search', searchClassName]">
    <form action="http://localhost:8080/#/list">
      <div class="search-box">
        <Select
          name="pref"
          label="都道府県"
          :options="prefList"
          @onChange="getLines"
        />
        <Select
          name="line"
          label="路線"
          :options="lineList"
          @onChange="getStations"
        />
        <Select
          name="station"
          label="最寄り駅"
          :options="stationList"
        />
      </div>
      <FormItem
        label="作業内容"
        isFlex="true"
        isCheck="true"
      >
        <CheckBox
            v-for="(job, index) in jobTypeList"
            :key="index"
            :id="`job-${index}`"
            name="job"
            :label="job"
          />
      </FormItem>
      <FormItem
        label="希望日"
        isFlex="true"
        isDate="true"
      >
        <p class="search-date-input">
          <v-date-picker
            :mode="dp.mode"
            :popover="dp.popover"
            :formats="dp.input"
            v-model="dp.startDate">
          </v-date-picker>
        </p>
        &nbsp;〜&nbsp;
        <p class="search-date-input">
          <v-date-picker
            :mode="dp.mode"
            :popover="dp.popover"
            :formats="dp.input"
            v-model="dp.endDate">
          </v-date-picker>
        </p>
      </FormItem>
      <FormItem
        label="性別"
        isFlex="true"
        isCheck="true"
      >
        <CheckBox
          v-for="(sex, index) in ['男性', '女性']"
          :key="index"
          :id="`sex-${index}`"
          name="sex"
          :label="sex"
        />
      </FormItem>
      <FormItem label="フリーワード">
        <InputText name="q" placeholder="フリーワード" />
      </FormItem>
      <p class="search-btn">
        <Button
          class="btn-heighlight"
        >
          <font-awesome-icon icon="search" />
          検索する
        </Button>
      </p>
      <p class="search-btn is-close">
        <Button
          class="btn-gray"
          @onClick="toggleShowSearch"
        >閉じる</Button>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  prefs, lines, stations, jobType,
} from '@/data/data';
import FormItem from '@/components/FormItem.vue';
import Select from '@/components/Select.vue';
import CheckBox from '@/components/CheckBox.vue';
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    FormItem,
    Select,
    CheckBox,
    InputText,
    Button,
  },
})
export default class Search extends Vue {
  prefList = prefs;

  lineList: string[] = [];

  stationList: string[] = [];

  jobTypeList: string[] = jobType;

  showSearch = false;

  dp = {
    mode: 'single',
    startDate: new Date(),
    endDate: new Date(),
    input: ['YYYY-MM-DD'],
    popover: {
      visibility: 'focus',
    },
  };

  getLines(pref: string) {
    const list = lines.filter((l) => l.pref === pref);
    this.lineList = list.length ? list[0].lines : [];
  }

  getStations(line: string) {
    const list = stations.filter((s) => s.line === line);
    this.stationList = list.length ? list[0].stations : [];
  }

  get searchClassName() {
    return this.$store.state.showSearch ? 'is-shown' : '';
  }

  toggleShowSearch() {
    this.$store.commit('toggle');
  }
}
</script>

<style lang="scss" scoped>
  .search {
    position: sticky;
    @media #{$not_sp} {
      top: 60px;
    }
    @media #{$sp} {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 100%;
      z-index: map-get($zIndex, search);
      background: map-get($colors, body);
      padding: 60px 3% 10px;
      transition: .4s;
      &.is-shown {
        left: 0;
      }
    }
    &-btn {
      @media #{$sp} {
        &:first-of-type {
          margin-bottom: 15px;
        }
      }
      @media #{$not_sp} {
        &.is-close {
          display: none;
        }
      }
    }
  }
</style>
