<template>
  <div class="search" ref="search">
    <p class="search-show">
      <Button
          label="詳細検索"
          className="heighlight"
          @onClick="showSearch"
        />
    </p>
    <form>
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
      <dl class="search-box">
        <dt class="search-box-label"><label>作業内容</label></dt>
        <dd class="search-check">
          <CheckBox
            v-for="(job, index) in jobTypeList"
            :key="index"
            :id="`job-${index}`"
            name="job"
            :label="job"
          />
        </dd>
      </dl>
      <dl class="search-box">
        <dt class="search-box-label"><label>希望日</label></dt>
        <dd class="search-date">
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
        </dd>
      </dl>
      <dl class="search-box">
        <dt class="search-box-label"><label>性別</label></dt>
        <dd class="search-check">
          <CheckBox
            v-for="(sex, index) in ['男性', '女性']"
            :key="index"
            :id="`sex-${index}`"
            name="sex"
            :label="sex"
          />
        </dd>
      </dl>
      <dl class="search-box">
        <dt class="search-box-label"><label>フリーワード</label></dt>
        <dd>
          <InputText name="q" placeholder="フリーワード" />
        </dd>
      </dl>
      <p class="search-btn">
        <Button
          label="検索"
          className="heighlight"
          icon="search"
        />
      </p>
      <p class="search-btn is-close">
        <Button
          label="閉じる"
          className="gray"
          @onClick="closeSearch"
        />
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  prefs, lines, stations, jobType,
} from '@/data/data';
import Select from '@/components/Select.vue';
import CheckBox from '@/components/CheckBox.vue';
import InputText from '@/components/InputText.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
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

  showSearch() {
    const search = this.$refs.search as HTMLElement;
    search.classList.add('is-shown');
  }

  closeSearch() {
    const search = this.$refs.search as HTMLElement;
    search.classList.remove('is-shown');
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
      bottom: -100%;
      left: 0;
      z-index: map-get($zIndex, search);
      background: map-get($colors, body);
      padding: 60px 3% 10px;
      transition: .4s;
      &.is-shown {
        bottom: 0;
      }
    }
    &-box {
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid map-get($colors, tertiary);
      &:last-of-type {
        border-bottom: none;
      }
      &-label {
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
    &-date {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-input {
        flex-basis: 45%;
      }
    }
    &-check {
      display: flex;
      flex-wrap: wrap;
      > * {
        flex-basis: 50%;
        margin-bottom: 5px;
      }
    }
    &-show {
      display: none;
      @media #{$sp} {
        display: block;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 10px 3%;
        background: rgba(0, 0, 0, .8);
        opacity: 1;
        transition: opacity .4;
        .is-shown & {
          opacity: 0;
        }
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
