<?php



use App\Http\Controllers\AppProxyController;

use Illuminate\Support\Facades\Route;



/*

|--------------------------------------------------------------------------

| Web Routes

|--------------------------------------------------------------------------

|

| Here is where you can register web routes for your application. These

| routes are loaded by the RouteServiceProvider within a group which

| contains the "web" middleware group. Now create something great!

|

*/

Route::any('/diamondtools', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/diamonds', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/navlabgrown', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/diamondtype/navlabgrown', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');


Route::any('/diamondtools/compare', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/navfancycolored', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/diamondtype/navfancycolored', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');


Route::any('/diamondtools/product/{any}', 'App\Http\Controllers\AppProxyController@index');

Route::any('/diamondtools/product/{any}/labcreated', 'App\Http\Controllers\AppProxyController@index');

Route::any('/diamondtools/product/{any}/fancydiamonds', 'App\Http\Controllers\AppProxyController@index');



Route::any('/diamondtools/labgrownsettings', 'App\Http\Controllers\AppProxyController@index')->name('diamondtools');

Route::any('/diamondtools/labgrownsettings/{any}', 'App\Http\Controllers\AppProxyController@index')->where('any', '.*');



Route::get('/', function () {
    return view('welcome');
})->middleware(['verify.shopify'])->name('home');





// Route::get('/{path?}', function () {

//     return view('welcome');
// })->middleware(['verify.shopify'])->name('home');


Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    // return what you want
});




// ADMIN
Route::get('/administrator', function () {
    return view('admin.login');
});
Route::get('/login', 'App\Http\Controllers\AdminController@login')->name('login');
Route::post('/login', 'App\Http\Controllers\AdminController@authenticate');
Route::get('/logout', 'App\Http\Controllers\AdminController@logout')->name('logout');

Route::group(['prefix' => 'gfadmin', 'as' => 'gfadmin.', 'middleware' => 'auth:gfadmin'], function () {
    Route::get('/dashboard', 'App\Http\Controllers\AdminController@dashboard')->name('dashboard');
    Route::get('/couons_index', 'App\Http\Controllers\AdminController@couons_index')->name('couons_index');
    Route::get('/create_coupon', 'App\Http\Controllers\AdminController@create_coupon')->name('create_coupon');
    Route::post('/create', 'App\Http\Controllers\AdminController@create')->name('create');
    Route::get('/edit_coupon/{id}', 'App\Http\Controllers\AdminController@edit')->name('edit_coupon');
    Route::get('/delete_coupon/{id}', 'App\Http\Controllers\AdminController@destroy')->name('delete_coupon');
    Route::post('/update/{id}', 'App\Http\Controllers\AdminController@update')->name('update');
});
