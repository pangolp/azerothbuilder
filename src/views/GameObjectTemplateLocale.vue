<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">GameObject Template Locale</li>
            </ol>
        </nav>
        <form>
            <div class="row">
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="entryInput">entry</label>
                        <input type="number" class="form-control" id="entryInput" aria-describedby="entryInput" v-model="GameObjectTemplateLocale.entry">
                        <small id="entryInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="localeFormControlSelect">Locale</label>
                        <select class="form-control" id="localeFormControlSelect" v-model="GameObjectTemplateLocale.locale">
                            <option>koKR</option>
                            <option>frFR</option>
                            <option>deDE</option>
                            <option>zhCN</option>
                            <option>zhTW</option>
                            <option>esES</option>
                            <option>esMX</option>
                            <option>ruRU</option>
                        </select>
                    </div>
                </div> 
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="nameInput">name</label>
                        <textarea class="form-control" id="nameInput" rows="3" v-model="GameObjectTemplateLocale.name"></textarea>
                        <small id="nameInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="castBarCaptionInput">castBarCaption</label>
                        <textarea class="form-control" id="castBarCaptionInput" rows="3" v-model="GameObjectTemplateLocale.castBarCaption"></textarea>
                        <small id="castBarCaptionInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="VerifiedBuildInput">VerifiedBuild</label>
                        <input type="number" class="form-control" id="VerifiedBuildInput" aria-describedby="VerifiedBuildInput" v-model="GameObjectTemplateLocale.VerifiedBuild">
                        <small id="VerifiedBuildInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
        </form>
        <code id="code">
            <div>
                <span>DELETE FROM</span> `gameobject_template_locale` <span>WHERE</span> `entry`={{ GameObjectTemplateLocale.entry }} <span>AND</span> `locale`="{{ GameObjectTemplateLocale.locale }}";
            </div>
            <div>
                <span>INSERT INTO</span> `gameobject_template_locale` (`entry`, `locale`, `name`, `castBarCaption`, `VerifiedBuild`) <span>VALUES</span>
            </div>
            <div>
                <span class="reset">({{ GameObjectTemplateLocale.entry }}, "{{ GameObjectTemplateLocale.locale }}", "{{ GameObjectTemplateLocale.name }}", "{{ GameObjectTemplateLocale.castBarCaption }}", {{ GameObjectTemplateLocale.VerifiedBuild }});</span>
            </div>
        </code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            GameObjectTemplateLocale: {
                entry: 0,
                locale: '',
                name: '',
                castBarCaption: '',
                VerifiedBuild: 18019
            }
        }
    }
}
</script>

<style scoped>
  code {
    color: #000;  
  }

  code span {
    color: #00F;
  }


  #code p {
    padding: 0;
    margin: 0;
  }

  form {
    padding-top: 1em;
  }

  .reset
  {
    color: #000;
  }
</style>
