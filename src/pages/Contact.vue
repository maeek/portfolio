<template>
  <article class="section contact fp-auto-height-responsive">
    <div class="wrapper headerWrapper">
      <dots-spreaded sizes="700" />
      <wave-header />
      <section-header>Contact</section-header>
    </div>
    <div class="wrapper wrapperHoriz">
      <a target="_blank" href="https://github.com/maeek" class="link">
        <img draggable="false" src="@/assets/svg/github.svg" />
        <span>maeek</span>
      </a>
      <a
        target="_blank"
        href="https://linkedin.com/in/maciej-suchanecki/"
        class="link"
      >
        <img draggable="false" src="@/assets/svg/linkedin.svg" />
        <span>maciej-suchanecki</span>
      </a>
    </div>
    <div class="wrapper contactWrapper">
      <form>
        <label>
          <tiny-title>Email</tiny-title>
          <input-component type="email" :required="true" name="email" />
        </label>
        <label>
          <tiny-title>Subject</tiny-title>
          <input-component type="text" :required="true" name="subject" />
        </label>
        <label>
          <tiny-title>Message</tiny-title>
          <message name="message"></message>
        </label>
        <submit-button>HIT ME UP</submit-button>
      </form>
    </div>
  </article>
</template>

<script>
import sectionHeader from "@/components/typo/header.vue";
import tinyTitle from "@/components/typo/tinyTitle.vue";
import inputComponent from "@/components/form/input.vue";
import message from "@/components/form/message.vue";
import submitButton from "@/components/buttons/submit.vue";
import dotsSpreaded from "@/components/decoration/dotsSpreaded.vue";
import waveHeader from "@/components/decoration/waveHeader.vue";
export default {
  name: "Contact",
  components: {
    sectionHeader,
    dotsSpreaded,
    waveHeader,
    tinyTitle,
    inputComponent,
    message,
    submitButton
  }
};
</script>

<style scoped lang="scss">
.contact {
  height: 100%;
  padding: 0 10%;
  background-color: $contact;
  margin: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    &.headerWrapper {
      margin: 8rem 0 4rem 0;
    }
    &.wrapperHoriz {
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      max-width: 600px;
      padding: 0 1rem;
      z-index: 15;
      .link {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        @extend %koho;
        font-weight: 900;
        span {
          color: lighten(#5b8bfb, 15);
          margin: 0 0.5rem;
        }
        img {
          width: 24px;
        }
        &:hover {
          img {
            filter: invert(100%) saturate(1.5);
          }
          span {
            color: $orange;
          }
        }
      }
    }
    &.contactWrapper {
      max-width: 600px;
      width: 100%;
      padding: 0 1rem;
      margin: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      form {
        width: 100%;
      }
      h5 {
        margin: 1rem 0 0.5rem 0;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .contact {
    justify-content: center;
    padding: 0 2.5%;
    .wrapper {
      &.headerWrapper {
        margin: 3rem 0;
      }
    }
  }
}
</style>
