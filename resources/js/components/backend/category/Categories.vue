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
                                <li class="breadcrumb-item active">Category</li>
                            </ol>
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <section class="content">
                     <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-10 offset-1">
                            <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Category</h3>
                                <router-link to="/add-category" class="card-title float-right">Add Category</router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th style="width: 10px"><input type="checkbox"> </th>
                                    <th style="width: 10px">Name</th>
                                    <th>Status</th>
                                    <th>Slug</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="category in categories">
                                        <td><input type="checkbox" :value="category.id" v-model="category_ids"> </td>
                                    <td>{{category.name | subString(2)}}</td>
                                    <td><span class="badge" :class="statusColor(category.status)">{{statusName(category.status)}}</span></td>
                                    <td>{{category.slug}}</td>
                                    <td>{{category.created_at | time}}</td>
                                    <td>
                                        <router-link class="btn btn-success" :to="`/edit-category/${category.id}`">Edit</router-link>
                                        <button class="btn btn-danger" @click="deleteData(category.id)">Delete</button>
                                    </td>
                                    </tr>
                                    <tr v-if="emptyData()">
                                        <td colspan="7">
                                            <h5 class="text-center text-danger">No Data Found!</h5>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            <!-- /.card-body -->
                            <div class="card-footer clearfix">
                                <ul class="pagination pagination-sm m-0 float-right">
                                <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                                </ul>
                            </div>
                            </div>
                            <!-- /.card -->
                        </div>
                        </div>
                    </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Categories',

    data() {
        return {
          data: [],
          category_ids: [],
        }
    },
    computed:{
        categories(){
            return this.$store.getters.test;
        }
    },

    methods: {
        statusName: function(status){
            let data ={0: "Inactive", 1:"Active"}
            return data[status];
        },
        statusColor:function(status){
            let data ={0: "badge-danger", 1:"badge-success"}
            return data[status];

        },
        emptyData: function(){
            return this.categories.length<1;
        },
        editData:function(category_id){
            alert(category_id);
        },
        deleteData:function(category_id){
            axios.get('/delete-category/'+ category_id).then(success=>{
                this.$store.dispatch('categoryData');
            category[success.category];
            }).catch(error=>{
                // console.log(error);
            });
        }

    },
    created(){

    },
    mounted(){
        this.$store.dispatch('categoryData');
        // const category = this.data;
        // axios.get('/index-category').then(success=>{
        //     console.log(success);
        //     category[success.category] ;
        // }).catch(error=>{
        //     console.log(error);
        // });
    }
}
</script>

<style>

</style>
