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
      <dl>
        <dt>日にち</dt>
        <dd>{{ date }}</dd>
        <dt>開始時間</dt>
        <dd>{{ startTime }}</dd>
        <dt>終了時間</dt>
        <dd>{{ endTime }}</dd>
        <dt>仕事内容</dt>
        <dd>
          <CheckBox
            v-for="(job, index) in jobTypes"
            :key="index"
            :id="`job-${index}`"
            name="job"
            :label="job"
          />
        </dd>
      </dl>
      <ul>
        <li>
          <Button
            class="btn-disabled"
            @onClick="closeModal"
          >閉じる</Button>
        </li>
        <li>
          <Button
            class="btn-heighlight"
            @onClick="register"
          >登録</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';
import CheckBox from '@/components/CheckBox.vue';
import Button from '@/components/Button.vue';
import { jobType } from '@/data/data';

@Component({
  components: {
    CheckBox,
    Button,
  },
})
export default class Modal extends Vue {
  @Prop() private date!: string

  @Prop() private startTime!: string

  @Prop() private endTime!: string

  jobTypes = jobType;

  @Emit('resetShowModal')
  closeModal() {
    const modal = this.$refs.modal as HTMLElement;
    modal.classList.remove('is-shown');
  }

  register() {
    console.log('registered!!');
    console.log(`date: ${this.date}`);
    // this.closeModal();
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    background: #fff;
    border-radius: 10px;
    width: 94%;
    height: 94%;
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
  }
</style>
