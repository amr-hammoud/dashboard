@extends('layouts.app')

@section('content')
    <div class="flex gap-5 font-figtree w-full h-full p-5 bg-neutral-100">

    <x-parent-box>

        <div class="list flex flex-wrap content-center justify-between h-full w-full
                text-slate-700 font-bold p-6 bg-neutral-400
                rounded hover:cursor-pointer" draggable="true">
            <div>List Item 1</div>
        </div>

    </x-parent-box>

    <x-parent-box>
        <div class="list flex flex-wrap content-center justify-between h-full w-full
                text-slate-700 font-bold p-6 bg-neutral-400
                rounded hover:cursor-pointer" draggable="true">
            <div>List Item 2</div>
        </div>
    </x-parent-box>
    
    <x-parent-box>
        <div class="list flex flex-wrap content-center justify-between h-full w-full
                text-slate-700 font-bold p-6 bg-neutral-400
                rounded hover:cursor-pointer" draggable="true">
            <div>List Item 3</div>
        </div>
    </x-parent-box>
        
    </div>
@endsection
