<template>
  <div
    class="modal-wrap"
    ref="modal"
    @click="closeModal"
  >
    <div
      class="modal"
      @click="event => event.stopPropagation()"
    >
      <p class="modal-close" @click="closeModal"></p>
      <form action="" @submit.prevent>
        <FormItem
          label="日時"
        >
          {{ date }} {{ startTime }}〜{{ endTime }}
        </FormItem>
        <FormItem
          label="仕事内容"
          isFlex="true"
          isCheck="true"
          isRequired="true"
        >
          <Errors :errors="errors"/>
          <CheckBox
            v-for="(job, index) in jobTypes"
            :key="index"
            :id="`modalJob-${index}`"
            name="modalJob"
            :label="job"
            @addJob="addJob"
          />
        </FormItem>
        <FormItem label="備考">
          <textarea name="comment" cols="20" rows="10"></textarea>
        </FormItem>
        <ul class="modal-btns">
          <li class="modal-btns-item">
            <Button
              class="btn-heighlight"
              @onClick="register"
            >登録する</Button>
          </li>
          <li class="modal-btns-item">
            <Button
              class="btn-disabled"
              @onClick="closeModal"
            >閉じる</Button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';
import FormItem from '@/components/FormItem.vue';
import CheckBox from '@/components/CheckBox.vue';
import Button from '@/components/Button.vue';
import Errors from '@/components/Errors.vue';
import { jobType } from '@/data/data';

@Component({
  components: {
    FormItem,
    CheckBox,
    Button,
    Errors,
  },
})
export default class Modal extends Vue {
  @Prop() private date!: string

  @Prop() private startTime!: string

  @Prop() private endTime!: string

  jobTypes = jobType;

  jobs: string[] = [];

  errors: string[] = [];

  @Emit('resetShowModal')
  closeModal() {
    const modal = this.$refs.modal as HTMLElement;
    modal.classList.remove('is-shown');
  }

  addJob(job: string) {
    if (typeof job !== 'string') {
      this.jobs = this.jobs.filter((j) => j !== job.target.value);
      return;
    }
    this.jobs = [...this.jobs, job];
    this.errors = [];
  }

  register() {
    if (this.jobs.length < 1) {
      this.errors.push('選択してください。');
      return;
    }
    console.log('register!!');
    // this.closeModal();
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    background: map-get($colors, body);
    border-radius: 10px;
    width: 94%;
    height: 94%;
    padding: 20px;
    max-width: 500px;
    max-height: 600px;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    &-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, .2);
      z-index: map-get($zIndex, modal);
      display: none;
      &.is-shown {
        display: block;
      }
    }
    &-close {
      position: absolute;
      width: 1em;
      height: 1em;
      top: 5px;
      right: 5px;
      &:before, &:after {
        content: '';
        cursor: pointer;
        position: absolute;
        display: block;
        background: map-get($colors, text);
        width: 4px;
        height: 20px;
        right: 6px;
        border-radius: 2px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    &-btns {
      @media #{$not_sp} {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
      &-item {
        @media #{$not_sp} {
          flex-basis: 48%;
        }
        @media #{$sp} {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
