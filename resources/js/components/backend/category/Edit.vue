<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                        <div class="col-sm-6">
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Edit Category</li>
                            </ol>
                        </div>
                    </div>
            </div><!-- /.container-fluid -->
        </section>

            <!-- Main content -->
            <section class="content">
                     <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-6 offset-3">
                            <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Category</h3>
                                <router-link to="/categories" class="card-title float-right">Category</router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form @submit.prevent="updateForm">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name">Category Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter Category Name" v-model="form.name">
                                           <HasError :form="form" field="name" />
                                        </div>
                                        <div class="form-group">

                                            <label class="form-check-label" for="status">Status</label> <br>
                                            <input type="radio" id="html" name="status" value="1" v-model="form.status">
                                            <label for="html">Active</label><br>
                                            <input type="radio" id="css" name="status" value="0" v-model="form.status">
                                            <label for="html">Inactive</label><br>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" :disabled="form.busy" class="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>

                            <!-- /.card -->
                        </div>
                    </div>
                   </div><!-- /.container-fluid -->
                </div>
            </section>
            <!-- /.content -->
    </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios';

export default {
    name: 'Edit',
    data() {
        return {
             form: new Form({
                id: null,
                name:null,
                status: null,
             })
        }
    },

    methods:{
        getCategory: function(){
            const this_ = this;
            axios.get('/edit-category/'+this.$route.params.id)
            .then(function(success){
               this_.form.fill(success.data.success);
            })
            .catch(function(error){
                console.log(error)
            });
        },

        updateForm:function(){
            const this_ = this;
            this.form.post('/update-category').then(success=>{
                Swal.fire({
                    icon: 'success',
                    title: 'OK',
                    text: 'msg',
                });
                this_.$router.push('/categories');
            }).catch(error=>{
                console.log(error);
            })
        }
    },

    mounted(){
        this.getCategory();
    }
}
</script>

<style>

</style>
