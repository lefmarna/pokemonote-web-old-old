<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email"
            label="メールアドレス"
          />
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="パスワード"
            type="password"
          />
          <v-card-actions>
            <v-btn
              @click="login"
              color="light-green darken-1"
              class="white--text"
            >
              ログイン
            </v-btn>
          </v-card-actions>
          <ErrorMeessages :errors="errors" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import router from "@/router";
import ErrorMeessages from "@/components/ErrorMessages.vue";

export type DataType = {
  email: string;
  password: string;
  errors: string[];
};

export default {
  name: "login",
  components: {
    ErrorMeessages,
  },
  data: (): DataType => ({
    email: "",
    password: "",
    errors: [],
  }),
  methods: {
    login(): void {
      axios
        .post("/auth/sign_in", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.$store.dispatch("setAuthData", {
            userId: response.data.data["id"],
            accessToken: response.headers["access-token"],
            client: response.headers["client"],
            uid: response.headers["uid"],
          });
          // 認証を求められてきた場合は元々の遷移先へ
          if (this.$route.query.redirect) {
            router.push(this.$route.query.redirect);
            // そうでない場合はトップページへ
          } else {
            router.push("/");
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>