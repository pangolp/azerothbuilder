<template>
	<div>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
				<li class="breadcrumb-item active" aria-current="page">Broadcast Text Locale</li>
			</ol>
		</nav>
		<form>
			<div class="row">
				<div class="col-12 col-md">
					<div class="form-group">
						<label for="IdInput">ID</label>
						<input type="text" class="form-control" id="IdInput" aria-describedby="IdInput" placeholder="ID al que se le quiere aplicar la traducción" v-model="BroadcastText.ID">
						<small id="IdInput" class="form-text text-muted">ID que se obtiene de la tabla <strong>`broadcast_text`</strong></small>
					</div>
				</div>
				<div class="col-12 col-md">
					<div class="form-group">
						<label for="localeFormControlSelect">Locale</label>
						<select class="form-control" id="localeFormControlSelect" v-model="BroadcastText.locale">
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
						<label for="MaleTextInput">MaleText</label>
						<textarea class="form-control" id="MaleTextInput" rows="3" v-model="BroadcastText.MaleText"></textarea>
						<small id="MaleTextInput" class="form-text text-muted">Texto para los npc masculinos</small>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md">
					<div class="form-group">
						<label for="FemaleTextInput">FemaleText</label>
						<textarea class="form-control" id="FemaleTextInput" rows="3" v-model="BroadcastText.FemaleText"></textarea>
						<small id="FemaleTextInput" class="form-text text-muted">Texto para los npc femeninos</small>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md">
					<div class="form-group">
						<label for="VerifiedBuildNumberInput">VerifiedBuild</label>
						<input type="number" class="form-control" id="VerifiedBuildNumberInput" aria-describedby="VerifiedBuildNumberInput" placeholder="" v-model="BroadcastText.VerifiedBuild">
						<small id="VerifiedBuildNumberInput" class="form-text text-muted">Verified Build</small>
					</div>
				</div>
			</div>
		</form>
		<code id="code">
			<div>
				<span>DELETE FROM</span> `broadcast_text_locale` <span>WHERE</span> `entry`={{ BroadcastText.ID }} <span>AND</span> `locale`="{{ BroadcastText.locale }}";
			</div>
			<div>
				<span>INSERT INTO</span> `broadcast_text_locale` (`ID`, `locale`, `MaleText`, `FemaleText`, `VerifiedBuild`) <span>VALUES</span>
			</div>
			<div>
				<span class="reset">({{ BroadcastText.ID }}, "{{ BroadcastText.locale }}", "{{ BroadcastText.MaleText}}", "{{ BroadcastText.FemaleText }}", {{ BroadcastText.VerifiedBuild }});</span>
			</div>
		</code>
	</div>
</template>

<script>
export default {
    name: 'BroadcastText',
    data() {
        return {
            BroadcastText : {
                ID: 0,
                locale: '',
                MaleText: '',
                FemaleText: '',
                VerifiedBuild: 18019
            }
        }
    },
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
