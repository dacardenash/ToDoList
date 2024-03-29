﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ToDoListAPI.Model;

namespace ToDoListAPI.Data
{
    public class ToDoListAPIContext : DbContext
    {
        public ToDoListAPIContext (DbContextOptions<ToDoListAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ToDoListAPI.Model.TaskItem> TaskItem { get; set; } = default!;
    }
}
