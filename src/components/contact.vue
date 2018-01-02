<template>
    <section class="contact-site">
        <h2 class="contact-site__name">Contact</h2>
        <form>
            <fieldset class="contact-form">
                <input class="contact-form__name" type="text" name="contact-name" placeholder="Name" required="required" tabindex="1" />
                <input class="contact-form__mail" type="email" name="contact_email" placeholder="E-mail" required="required" tabindex="2" />
                <textarea class="contact-form__message" rows="5" name="contact_body" placeholder="Message" required="required" tabindex="3"></textarea>
                <input class="contact-form__btn" type="submit" value="Send" tabindex="4" />
            </fieldset>
        </form>
    </section>
</template>

<script>



export default {

  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
